import { UserHeader } from '@/features/user-header';
import { CommentsList } from '@/features/comments/partials/comments-list';
import { CommentsPanelLayout, CommentsForm } from './partials';
import { useComments } from '@/features/comments/hooks/use-comments';

export const CommentsPanel = () => {
    const {
        comments,
        currentUserId,
        createNewComment,
        collapsedComment,
        removeComment,
        incrementRating,
        decrementRating
    } = useComments();

    if (!currentUserId) return null;

    return (
        <CommentsPanelLayout header={<UserHeader />}>
            <CommentsForm createNewComment={createNewComment} />
            <hr />
            <CommentsList
                comments={comments}
                currentUserId={currentUserId}
                removeComment={removeComment}
                collapsedComment={collapsedComment}
                incrementRating={incrementRating}
                decrementRating={decrementRating}
            />
        </CommentsPanelLayout>
    );
};
