import React, {useState} from 'react';
import Modal from 'react-responsive-modal';
import {useTranslation} from "react-i18next";
import "react-responsive-modal/styles.css";

const options = [
    {value: 'en', label: 'common.language.english'},
    {value: 'de', label: 'common.language.german'}
];

const LanguageSetting = ({onClose}) => {

    const [open, setOpen] = useState(true);

    const {t, i18n} = useTranslation();

    const handleClose = () => {
        setOpen(false);
        if (onClose) {
            onClose();
        }
    };

    const handleLocaleChange = (event) => {
        i18n.changeLanguage(event.target.value, onClose);
    };

    return (
        <Modal open={open} center onClose={handleClose}>
            <h2>{t('common.language.title')}</h2>
            <div>
                {t('common.language')}
                <select value={i18n.language} onChange={handleLocaleChange}>
                    {
                        options.map(it => {
                            return <option key={it.value} value={it.value}>{t(it.label)}</option>
                        })
                    }
                </select>
            </div>
        </Modal>
    );
};

export default LanguageSetting;