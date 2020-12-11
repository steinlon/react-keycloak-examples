import React from 'react'
import {route} from 'navi'
import {withKeycloak} from '@react-keycloak/web'
import {useTranslation} from "react-i18next";

const LoginPage = withKeycloak(({keycloak}) => {

    const {t} = useTranslation();

    return (
        <div>
            <button type="button" onClick={() => keycloak.login()}>{t('common.login')}</button>
        </div>
    )
});

export default route({
    title: 'Login',
    view: <LoginPage/>,
})
