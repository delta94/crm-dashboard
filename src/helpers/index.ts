const envs: { [key: string]: string } = (window as any)._env_;

export * from './cookies';

export const isDevMod = process.env.NODE_ENV === 'development';

export const isEnvDefined = () => {
  if (isDevMod) return true;
  const envsValues = Object.values(envs);
  return !!envsValues.length && envsValues.every(variable => variable !== '');
};

export const env = (name: string) => {
  const key = `REACT_APP_${name}`;

  return isDevMod ? process.env[key] : envs[key];
};

export const isEmailValid =
  // eslint-disable-next-line
  (email: string) => /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,11})$/i.test(email);

export const isPhoneValid =
  // eslint-disable-next-line
  (phone: string) => /^[+]{0,1}[0-9]{0,1}[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(phone);
