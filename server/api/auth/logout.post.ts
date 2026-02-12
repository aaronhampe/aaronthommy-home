import { deleteSession } from '../../utils/session';

export default defineEventHandler(async (event) => {
    const sessionId = getCookie(event, 'session_id');

    if (sessionId) {
        deleteSession(sessionId);
    }

    deleteCookie(event, 'session_id');

    return { success: true };
});
