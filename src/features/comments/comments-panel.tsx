import { UserHeader } from '@/features/user-header';
import { useComments } from './hooks/use-comments';
import { CommentsPanelLayout, CommentsForm, CommentsList } from './partials';

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
