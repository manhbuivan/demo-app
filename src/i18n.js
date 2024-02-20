import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { fetchLanguageData } from './api/getAll';

const initializeI18n = async () => {
    const languageData = await fetchLanguageData();
    const resources = {
        en: { translation: languageData },
    };
    i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: "en",
            fallbackLng: "en",
            interpolation: {
                escapeValue: false,
            },
        });
};

initializeI18n();

export default i18n;
