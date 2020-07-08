const envs: Record<string, string> = (window as any)._env_ || {};

export const { API_URL, STORE_NAME } = envs;

// Options object for formatting date with toLocaleString method
export const DATE_OPTIONS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
