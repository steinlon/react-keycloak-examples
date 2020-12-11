import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

const initI18n = () => {

    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                en: {
                    translations: {
                        'common.language': 'Language',
                        'common.language.english': 'English',
                        'common.language.german': 'German',
                        'common.loading': 'Loading',
                        'common.login': 'Login',
                        'common.logout': 'Logout',
                        'common.callApi': 'Call Api',
                        'common.welcomeMessage': 'Welcome to Standard Integration Layer',
                        'user.info': 'User {{user}} is {{authenticated}} authenticated',
                    }
                },
                de: {
                    translations: {
                        'common.language': 'Sprache',
                        'common.language.english': 'Englisch',
                        'common.language.german': 'Deutsch',
                        'common.loading': 'Laden',
                        'common.login': 'Anmelden',
                        'common.logout': 'Abmelden',
                        'common.callApi': 'Api rufen',
                        'common.welcomeMessage': 'Willkommen bei Standard Integration Layer',
                        'user.info': 'Benutzer {{user}} ist {{authenticated}} authentifiziert',
                    }
                }
            },
            lng: "de",
            fallbackLng: "de",
            debug: false,

            ns: ["translations"],
            defaultNS: "translations",

            keySeparator: false,

            interpolation: {
                escapeValue: false
            }
        });
};

export {initI18n};
