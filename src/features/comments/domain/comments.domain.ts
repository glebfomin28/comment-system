import { IUser } from '@/features/user';

export type TRatingDirection = 'up' | 'down';

export type TRating = {
    up: number;
    down: number;
};

export interface IComment {
    id: number;
    author: IUser;
    message: string;
    date: Date;
    rating: TRating;
    ratingUserHistory: Record<string, TRatingDirection>;
    isCollapsed: boolean;
}

export interface ICommentsStoreState {
    comments: IComment[];
}

interface ICommentsStoreActions {
    addComment: (comment: IComment) => void;
    removeComment: (id: number) => void;
    commentRatingUp: (id: number, userId: string) => void;
    commentRatingDown: (id: number, userId: string) => void;
    collapsedComment: (id: number) => void;
    removeAll: () => void;
}

export type TCommentsStore = ICommentsStoreState & ICommentsStoreActions;
