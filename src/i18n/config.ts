import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { es } from './es';
import { fi } from './fi';
import { fr } from './fr';
import { id } from './id';
import { ko } from './ko';
import { sv } from './sv';
import { zh } from './zh';

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: { en, es, fi, fr, id, ko, sv, zh },
  defaultNS: 'common',
  fallbackLng: 'en',
});
