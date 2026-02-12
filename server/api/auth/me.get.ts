import { getSession } from '../../utils/session';

export default defineEventHandler(async (event) => {
    const sessionId = getCookie(event, 'session_id');

    if (!sessionId) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        });
    }

    const user = getSession(sessionId);

    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        });
    }

    // The linter might complain about user.user_id, but getSession returns (User & { sessionId: string }) or undefined.
    // We can force cast if needed, but it should be fine.
    return {
        user: { id: user.user_id, email: user.email, name: user.name },
    };
});
