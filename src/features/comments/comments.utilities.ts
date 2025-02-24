export function formatCommentDate(commentDate: Date | string): string {
    const date = commentDate instanceof Date ? commentDate : new Date(commentDate);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMinutes = Math.floor(diffMs / (60 * 1000));

    if (diffMinutes <= 0) {
        return `меньше минуты назад`;
    }

    if (diffMinutes < 60) {
        return `${diffMinutes} мин. назад`;
    }

    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) {
        return `${diffHours} ч. назад`;
    }

    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays} дн. назад`;
}
