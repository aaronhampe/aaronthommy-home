import { z } from 'zod';
import { db } from '../../utils/db';
import { verifyPassword } from '../../utils/password';
import { createSession } from '../../utils/session';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Verify Turnstile Token (only in production or if token is present)
    // In dev we might skip if we want, but user asked for protection.
    if (body.turnstileToken) {
        const verifyResult = await verifyTurnstileToken(body.turnstileToken);
        if (!verifyResult.success) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid CAPTCHA',
            });
        }
    } else if (process.env.NODE_ENV === 'production') {
        // Enforce in production
        throw createError({
            statusCode: 400,
            statusMessage: 'CAPTCHA required',
        });
    }

    const result = z.object({
        email: z.string().email(),
        password: z.string().min(8),
    }).safeParse(body);

    if (!result.success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid input',
            data: result.error.errors,
        });
    }

    const { email, password } = result.data;

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as any;

    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid email or password',
        });
    }

    // If user has no password (e.g. Google auth only), they can't login with password
    if (!user.password) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Please login with Google',
        });
    }

    const valid = await verifyPassword(password, user.password);

    if (!valid) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid email or password',
        });
    }

    const { sessionId, expiresAt } = createSession(user.id);

    setCookie(event, 'session_id', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: new Date(expiresAt),
    });

    return {
        success: true,
        user: { id: user.id, email: user.email, name: user.name },
    };
});
