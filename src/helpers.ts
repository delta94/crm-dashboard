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
