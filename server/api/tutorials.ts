import { db } from '../utils/db';
import { getSession } from '../utils/session';

export default defineEventHandler(async (event) => {
    const method = event.method;
    const sessionId = getCookie(event, 'session_id');

    if (!sessionId) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }
    const user = getSession(sessionId);
    if (!user) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }

    if (method === 'GET') {
        const stmt = db.prepare('SELECT * FROM tone_tutorials ORDER BY created_at DESC');
        return { tutorials: stmt.all() };
    }

    // Admin only for POST (creating tutorials)
    if (method === 'POST') {
        if (user.role !== 'admin') {
            throw createError({ statusCode: 403, statusMessage: 'Forbidden' });
        }

        const body = await readBody(event);
        // Simple validation
        if (!body.title || !body.video_url || !body.settings) {
            throw createError({ statusCode: 400, statusMessage: 'Missing fields' });
        }

        const stmt = db.prepare('INSERT INTO tone_tutorials (title, video_url, description, settings) VALUES (?, ?, ?, ?)');
        stmt.run(body.title, body.video_url, body.description || '', body.settings);

        return { success: true };
    }
});
