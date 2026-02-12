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
        // Get last 50 messages
        const stmt = db.prepare(`
      SELECT cm.id, cm.text, cm.created_at, u.name as user_name, u.avatar as user_avatar, u.id as user_id 
      FROM chat_messages cm
      JOIN users u ON cm.user_id = u.id
      ORDER BY cm.created_at DESC
      LIMIT 50
    `);
        const messages = stmt.all();
        return { messages: messages.reverse() };
    }

    if (method === 'POST') {
        const body = await readBody(event);
        if (!body.text || typeof body.text !== 'string' || body.text.trim().length === 0) {
            throw createError({ statusCode: 400, statusMessage: 'Message empty' });
        }

        const stmt = db.prepare('INSERT INTO chat_messages (user_id, text) VALUES (?, ?)');
        const info = stmt.run(user.user_id, body.text.trim());

        return { success: true, id: info.lastInsertRowid };
    }
});
