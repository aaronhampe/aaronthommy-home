import { z } from 'zod';
import { db } from '../../utils/db';
import { hashPassword } from '../../utils/password';
import { createSession } from '../../utils/session';

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(2),
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const result = registerSchema.safeParse(body);

    if (!result.success) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid input',
            data: result.error.errors,
        });
    }

    const { email, password, name } = result.data;

    // Check if user exists
    const userExists = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
    if (userExists) {
        throw createError({
            statusCode: 409,
            statusMessage: 'User already exists',
        });
    }

    // Create user
    const hashedPassword = await hashPassword(password);
    const stmt = db.prepare('INSERT INTO users (email, password, name) VALUES (?, ?, ?)');
    const info = stmt.run(email, hashedPassword, name);
    const userId = info.lastInsertRowid as number;

    // Create session
    const { sessionId, expiresAt } = createSession(userId);

    // Set cookie
    setCookie(event, 'session_id', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: new Date(expiresAt),
    });

    return {
        user: { id: userId, email, name },
    };
});
