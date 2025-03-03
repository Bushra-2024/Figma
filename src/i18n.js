import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const Languages = ['en', 'ru', 'tj'];

i18n
  .use(Backend) // Load translation files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Use 'en' as the fallback language if the user's language isn't available
    debug: true,
    whitelist: Languages, // List of supported languages

    interpolation: {
      escapeValue: false, // React already escapes values by default
    },

    // Optional: configure how to load translations
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files (adjust as needed)
    },
  });

export default i18n;
