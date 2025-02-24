import { useUserStore } from '@/features/user';
import { useCommentsStore } from '../stores/comments.store';

export const useComments = () => {
    const comments = useCommentsStore(state => state.comments);
    const addComment = useCommentsStore(state => state.addComment);
    const removeComment = useCommentsStore(state => state.removeComment);
    const commentRatingUp = useCommentsStore(state => state.commentRatingUp);
    const commentRatingDown = useCommentsStore(state => state.commentRatingDown);
    const collapsedComment = useCommentsStore(state => state.collapsedComment);

    const currentUser = useUserStore(state => state.user);

    const createNewComment = (message: string) => {
        if (!currentUser || !message) return;

        const currentDate = new Date();

        addComment({
            id: currentDate.getTime(),
            message,
            author: currentUser,
            date: currentDate,
            rating: {
                down: 0,
                up: 0
            },
            isCollapsed: false,
            ratingUserHistory: {}
        });
    };

    const incrementRating = (commentId: number) => {
        if (!currentUser?.id) return;

        commentRatingUp(commentId, currentUser.id);
    };

    const decrementRating = (commentId: number) => {
        if (!currentUser?.id) return;

        commentRatingDown(commentId, currentUser.id);
    };

    return {
        comments,
        currentUserId: currentUser?.id,
        createNewComment,
        removeComment,
        incrementRating,
        decrementRating,
        collapsedComment
    };
};
