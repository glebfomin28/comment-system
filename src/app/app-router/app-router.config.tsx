import { routes } from '@/shared/services/routes.services';
import { UserSelect } from '@/features/user-select';
import { CommentsPanel } from '@/features/comments';
import { NotFoundPage } from '@/pages/not-found-page';
import { ERoutes, TAppRouteProps } from './app-router.types';

export const appRouterConfig: Record<ERoutes, TAppRouteProps> = {
    [ERoutes.MAIN]: {
        path: routes.main(),
        element: <CommentsPanel />,
        private: true
    },
    [ERoutes.AUTH]: {
        path: routes.auth(),
        element: <UserSelect />
    },
    [ERoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />
    }
};
