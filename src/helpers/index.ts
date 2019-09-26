declare global {
  interface Window {
    _env_: {
      [key: string]: string;
    };
  }
}

export const isDevMod = process.env.NODE_ENV === 'development';

export const checkEnv = () => {
  if (isDevMod) return true;

  return Object.values(window._env_).every(variable => variable !== '');
};

export const env = (name: string) => {
  const key = `REACT_APP_${name}`;

  return isDevMod ? process.env[key] : window._env_[key];
};
