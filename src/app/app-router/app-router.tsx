import { ReactNode, Suspense, useCallback } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { appRouterConfig } from './app-router.config';
import { TAppRouteProps } from './app-router.types';
import { routes } from '@/shared/services/routes.services';
import { useUserStore } from '@/features/user';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const isAuth = useUserStore(state => state.isAuth);

    return isAuth ? children : <Navigate to={routes.auth()} />;
};

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: TAppRouteProps) => {
        const pageComponent = <Suspense fallback={<div>Loading</div>}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.private ? <PrivateRoute>{pageComponent}</PrivateRoute> : pageComponent}
            />
        );
    }, []);

    return (
        <BrowserRouter>
            <Routes>{Object.values(appRouterConfig).map(renderWithWrapper)}</Routes>
        </BrowserRouter>
    );
};
