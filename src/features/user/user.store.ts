import { create } from 'zustand';
import { IUserStoreState, TUserStore } from '@/features/user/user.domain';
import { persist } from 'zustand/middleware';

const initialState: IUserStoreState = {
    isAuth: false,
    user: null
};

const USER_STORE_NAME = 'user-store';

export const useUserStore = create<TUserStore>()(
    persist(
        set => ({
            ...initialState,
            setIsAuth: isAuth => set(() => ({ isAuth })),
            setUser: userData => set(() => ({ user: userData, isAuth: true })),
            logout: () => set(() => initialState)
        }),
        {
            name: USER_STORE_NAME
        }
    )
);
