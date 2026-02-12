import { db } from './db';
import type { User } from './db';
import { randomUUID } from 'node:crypto';

const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

export const createSession = (userId: number) => {
    const sessionId = randomUUID();
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS).toISOString();

    const stmt = db.prepare('INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)');
    stmt.run(sessionId, userId, expiresAt);

    return { sessionId, expiresAt };
};

export const getSession = (sessionId: string) => {
    const stmt = db.prepare(`
    SELECT s.*, u.email, u.name, u.id as user_id
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.id = ? AND s.expires_at > datetime('now')
  `);
    return stmt.get(sessionId) as (User & { sessionId: string }) | undefined;
};

export const deleteSession = (sessionId: string) => {
    const stmt = db.prepare('DELETE FROM sessions WHERE id = ?');
    stmt.run(sessionId);
};
