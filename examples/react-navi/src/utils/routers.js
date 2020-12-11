import React, {Suspense} from 'react'
import {Router, View} from 'react-navi'
import {useKeycloak} from '@react-keycloak/web'
import {lazy, map, mount, redirect, route} from 'navi'
import HomePage from '../pages/Home'
import {withAuthentication} from './authentication'
import {useTranslation} from "react-i18next";

// Define route configs
const routes = mount({
    '/home': withAuthentication(
        route({
            title: 'Home',
            view: <HomePage/>,
        })
    ),
    '/login': map(async (request, context) =>
        context.isAuthenticated
            ? redirect(request.params.redirectTo ? decodeURIComponent(request.params.redirectTo) : '/home')
            : lazy(() => import('../pages/Login'))
    ),
    '/': redirect('/login'),
});

export const AppRouter = () => {
    const [keycloak, initialized] = useKeycloak();
    const {t} = useTranslation();

    if (!initialized) {
        return <div>{t('common.loading')}</div>
    }

    return (
        <Router
            routes={routes}
            context={{isAuthenticated: keycloak.authenticated}}>
            <Suspense fallback={null}>
                <View/>
            </Suspense>
        </Router>
    );
};
