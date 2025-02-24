import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TCommentsStore } from '../domain/comments.domain';

const COMMENTS_STORE_NAME = 'comment-store';

export const useCommentsStore = create<TCommentsStore>()(
    persist(
        set => ({
            comments: [],
            addComment: comment => set(state => ({ comments: [comment, ...state.comments] })),
            removeComment: id =>
                set(state => ({
                    comments: state.comments.filter(comment => comment.id !== id)
                })),
            removeAll: () => set(() => ({ comments: [] })),
            commentRatingUp: (id, userId) => {
                set(state => ({
                    comments: state.comments?.map(comment => {
                        if (comment.id !== id) return comment;

                        const hasUp = comment.ratingUserHistory[userId] === 'up';

                        if (hasUp) {
                            const updatedHistory = comment.ratingUserHistory;
                            delete updatedHistory[userId];

                            return {
                                ...comment,
                                rating: {
                                    ...comment.rating,
                                    up: comment.rating.up - 1
                                },
                                ratingUserHistory: updatedHistory
                            };
                        } else {
                            return {
                                ...comment,
                                rating: {
                                    down: comment.ratingUserHistory[userId]
                                        ? comment.rating.down - 1
                                        : comment.rating.down,
                                    up: comment.rating.up + 1
                                },
                                ratingUserHistory: { ...comment.ratingUserHistory, [userId]: 'up' }
                            };
                        }
                    })
                }));
            },
            commentRatingDown: (id, userId) => {
                set(state => ({
                    comments: state.comments?.map(comment => {
                        if (comment.id !== id) return comment;

                        const hasDown = comment.ratingUserHistory[userId] === 'down';

                        if (hasDown) {
                            const updatedHistory = comment.ratingUserHistory;
                            delete updatedHistory[userId];

                            return {
                                ...comment,
                                rating: {
                                    ...comment.rating,
                                    down: comment.rating.down - 1
                                },
                                ratingUserHistory: updatedHistory
                            };
                        } else {
                            return {
                                ...comment,
                                rating: {
                                    up: comment.ratingUserHistory[userId] ? comment.rating.up - 1 : comment.rating.up,
                                    down: comment.rating.down + 1
                                },
                                ratingUserHistory: { ...comment.ratingUserHistory, [userId]: 'down' },
                                isCollapsed: comment.rating.down + 1 >= 10
                            };
                        }
                    })
                }));
            },
            collapsedComment: id =>
                set(state => ({
                    comments: state.comments.map(comment =>
                        comment.id === id ? { ...comment, isCollapsed: !comment.isCollapsed } : comment
                    )
                }))
        }),
        {
            name: COMMENTS_STORE_NAME
        }
    )
);
