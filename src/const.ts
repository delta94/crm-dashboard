const envs: Record<string, string> = (window as any)._env_ || {};

export const { API_URL, STORE_NAME } = envs;
