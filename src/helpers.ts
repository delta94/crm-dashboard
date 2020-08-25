import { DATE_OPTIONS } from 'const';

export const parseISOString = (isoString: string) => {
  const b: any = isoString.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

export const capitalize = (word: string) => {
  if (!word) return word;

  return word[0].toUpperCase() + word.slice(1);
};

export const snakeToCamelCase = (name: string) => name
  .split('_')
  .map((word, index) => index === 0 ? word : capitalize(word))
  .join('');

export const formateDate = (date: Date, locale = 'en-US') => date.toLocaleString(locale, DATE_OPTIONS);

export const formateIsoDate = (isoDateString: string, locale?: string) => {
  const date = new Date(isoDateString.slice(0, 10));

  return formateDate(date, locale);
};

export const checkUrlString = (urlString: string) => {
  return /(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/i.test(urlString);
};
