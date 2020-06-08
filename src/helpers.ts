export const parseISOString = (isoString: string) => {
  const b: any = isoString.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};
