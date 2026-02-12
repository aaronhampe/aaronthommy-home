import { OAuth2Client } from 'google-auth-library';

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const clientId = config.public?.googleClientId || process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const redirectUri = process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000/api/auth/google/callback';

    if (!clientId || !clientSecret) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Google Auth not configured',
        });
    }

    const client = new OAuth2Client(clientId, clientSecret, redirectUri);

    const authorizeUrl = client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
        prompt: 'consent',
    });

    return sendRedirect(event, authorizeUrl);
});
