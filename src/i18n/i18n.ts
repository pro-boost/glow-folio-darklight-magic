import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from '../translations/languages/en';
import { fr } from '../translations/languages/fr';
import { Language } from './translations/types';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      fr: {
        translation: fr
      }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export const changeLanguage = (language: Language) => {
  i18n.changeLanguage(language);
};

export default i18n; 