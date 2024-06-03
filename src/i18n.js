// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import translationFR from './locales/fr/translation.json';

const resources = {
  fr: {
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector) // Detects language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Use English if detected language is not available
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
