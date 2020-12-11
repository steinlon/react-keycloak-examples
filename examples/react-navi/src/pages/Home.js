import React, {useCallback, useState} from 'react'
import {useKeycloak} from '@react-keycloak/web'
import {useAxios} from '../utils/apiCall'
import logo from "../logo.svg"
import './Home.css'
import {useTranslation} from "react-i18next";
import LanguageSetting from "../component/LanguageSetting";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default () => {
    const {keycloak} = useKeycloak();

    const apiInstance = useAxios(SERVER_URL, {filter: 'filter'});
    const callApi = useCallback(() => {
        apiInstance.get('/endPoint', {params: {filter: "test"}});
    }, [apiInstance]);

    const {t} = useTranslation();

    const [languageSwitch, setLanguageSwitch] = useState(false);

    const switchLanguage = () => {
        setLanguageSwitch(pre => !pre);
    };

    return (
        <div>
            <div>{t('user.info', {user: keycloak.idTokenParsed.preferred_username}, {authenticated: !keycloak.authenticated ? 'NOT ' : ''})}</div>
            {keycloak.authenticated && (<button type="button" onClick={() => keycloak.logout()}>{t('common.logout')}</button>)}
            <button type="button" onClick={callApi}>{t('common.callApi')}</button>
            <button type="button" onClick={switchLanguage}>{t('common.language')}</button>
            {languageSwitch && <LanguageSetting onClose={switchLanguage}/>}
            <div className="App">
                <div className="App-header">
                    <h2>{t('common.welcomeMessage')}</h2>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
            </div>
        </div>
    )
}
