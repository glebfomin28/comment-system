import { routes } from '@/shared/services/routes.services';
import { ERoutes, TAppRouteProps } from './app-router.types';
import { UserSelect } from '@/features/user-select';
import { CommentsPanel } from '@/features/comments';

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
    [ERoutes.FORBIDDEN]: {
        path: routes.forbidden(),
        element: <div>FORBIDDEN</div>
    },
    [ERoutes.NOT_FOUND]: {
        path: '*',
        element: <div>NOT_FOUND</div>
    }
};
