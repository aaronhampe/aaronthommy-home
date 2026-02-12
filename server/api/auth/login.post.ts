import { z } from 'zod';
import { db } from '../../utils/db';
import { verifyPassword } from '../../utils/password';
import { createSession } from '../../utils/session';

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = loginSchema.safeParse(body);

    if (!result.success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid input',
        });
    }

    const { email, password } = result.data;

    // Find user
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;
    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid credentials',
        });
    }

    // Verify password
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid credentials',
        });
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

    return {
        user: { id: user.id, email: user.email, name: user.name },
    };
});
