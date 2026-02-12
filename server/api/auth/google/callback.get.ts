import { OAuth2Client } from 'google-auth-library';
import { db } from '../../../utils/db';
import { createSession } from '../../../utils/session';

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const code = query.code as string;

    if (!code) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Missing code',
        });
    }

    const config = useRuntimeConfig();
    const clientId = config.public?.googleClientId || process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback';

    const client = new OAuth2Client(clientId, clientSecret, redirectUri);

    try {
        const { tokens } = await client.getToken(code);
        client.setCredentials(tokens);

        const userInfoResponse = await client.request({
            url: 'https://www.googleapis.com/oauth2/v3/userinfo',
        });

        const userInfo = userInfoResponse.data as any;

        if (!userInfo.email) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email not provided by Google',
            });
        }

        // Check if user exists by google_id
        let user = db.prepare('SELECT * FROM users WHERE google_id = ?').get(userInfo.sub) as any;

        if (!user) {
            // Check if user exists by email (to link accounts or fail)
            // For simplicity, we'll link by email if it exists, or update google_id
            const existingUserByEmail = db.prepare('SELECT * FROM users WHERE email = ?').get(userInfo.email) as any;

            if (existingUserByEmail) {
                // Link account
                db.prepare('UPDATE users SET google_id = ?, avatar = ? WHERE id = ?').run(
                    userInfo.sub,
                    userInfo.picture,
                    existingUserByEmail.id
                );
                user = { ...existingUserByEmail, google_id: userInfo.sub, avatar: userInfo.picture };
            } else {
                // Create new user
                const stmt = db.prepare(
                    'INSERT INTO users (email, name, google_id, avatar, role) VALUES (?, ?, ?, ?, ?)'
                );
                const info = stmt.run(userInfo.email, userInfo.name, userInfo.sub, userInfo.picture, 'user');
                user = {
                    id: info.lastInsertRowid,
                    email: userInfo.email,
                    name: userInfo.name,
                    google_id: userInfo.sub,
                    avatar: userInfo.picture,
                    role: 'user',
                };
            }
        } else {
            // Update avatar in case it changed
            if (user.avatar !== userInfo.picture) {
                db.prepare('UPDATE users SET avatar = ? WHERE id = ?').run(userInfo.picture, user.id);
            }
        }

        // Create session
        const { sessionId, expiresAt } = createSession(user.id);

        // Set cookie
        setCookie(event, 'session_id', sessionId, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            expires: new Date(expiresAt),
        });

        return sendRedirect(event, '/dashboard');

    } catch (error) {
        console.error('Google Auth Error:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Authentication failed',
        });
    }
});
