export interface IUser {
    id: string;
    name: string;
    avatarSrc: string;
}

export interface IUserStoreState {
    isAuth: boolean;
    user: IUser | null;
}

interface IUserStoreActions {
    setIsAuth: (v: boolean) => void;
    setUser: (v: IUser) => void;
    logout: () => void;
}

export type TUserStore = IUserStoreState & IUserStoreActions;
