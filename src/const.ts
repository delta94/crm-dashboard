const envs: Record<string, string> = (window as any)._env_ || {};

export const { API_URL, STORE_NAME } = envs;

export const gameTypes = ['desktop', 'web'];

export const DEFAULT_REGION_CURRENCY_ID = 43;

export const gamePlatforms = ['windows', 'macOS', 'linux'];

export const TAGLINE_MAX_LENGTH = 300;
export const DESCRIPTION_MAX_LENGTH = 10000;
