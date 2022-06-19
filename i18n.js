import i18n from 'i18next';
import * as frTranslation from './public/locales/fr.json';
import * as arTranslation from './public/locales/ar.json';
import * as enTranslation from './public/locales/en.json';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
