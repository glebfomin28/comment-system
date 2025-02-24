import { RouteProps } from 'react-router-dom';

export enum ERoutes {
    MAIN = 'main',
    AUTH = 'auth',
    NOT_FOUND = 'not-found'
}

export type TAppRouteProps = RouteProps & {
    private?: boolean;
};
