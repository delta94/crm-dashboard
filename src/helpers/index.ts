export const isDevMod = process.env.NODE_ENV === 'development';

export const checkEnv = () => {
  if (isDevMod) return true;

  const envVariables = (window as any)._env_;

  return !!envVariables && Object.values(envVariables).every(variable => variable !== '');
};

export const env = (name: string) => {
  const envVariables = isDevMod
    ? process.env
    : (window as any)._env_;

  return envVariables && envVariables[name];
};
