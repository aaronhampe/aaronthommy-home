import { z } from 'zod';
import { db } from '../../utils/db';
import { hashPassword } from '../../utils/password';
import { createSession } from '../../utils/session';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // Verify Turnstile Token
    if (body.turnstileToken) {
        const verifyResult = await verifyTurnstileToken(body.turnstileToken);
        if (!verifyResult.success) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid CAPTCHA',
            });
        }
    } else if (process.env.NODE_ENV === 'production') {
        throw createError({
            statusCode: 400,
            statusMessage: 'CAPTCHA required',
        });
    }

    const result = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().min(1),
    }).safeParse(body);

    if (!result.success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid input',
            data: result.error.errors,
        });
    }

    const { email, password, name } = result.data;

    const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email);

    if (existingUser) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email already exists',
        });
    }

    const hashedPassword = await hashPassword(password);

    const stmt = db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)');
    const info = stmt.run(email, hashedPassword, name);

    const userId = info.lastInsertRowid as number;

    const { sessionId, expiresAt } = createSession(userId);

    setCookie(event, 'session_id', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: new Date(expiresAt),
    });

    return {
        success: true,
        user: { id: userId, email, name },
    };
});
