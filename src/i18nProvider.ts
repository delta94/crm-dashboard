import russianMessages from './i18n/ru';
import englishMessages from './i18n/en';

const messages: { [key: string]: any } = {
  ru: russianMessages,
  en: englishMessages,
};

const i18nProvider = (locale: string) => messages[locale];

export const languages = [
  {
    title: 'English',
    value: 'en',
  },
  {
    title: 'Русский',
    value: 'ru',
  },
];

export default i18nProvider;
