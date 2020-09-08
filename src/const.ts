const envs: Record<string, string> = (window as any)._env_ || {};

export const { API_URL, STORE_NAME } = envs;

export const gameTypes = ['desktop', 'web'];

export const DEFAULT_REGION_CURRENCY_ID = 43;

export const gamePlatforms = ['windows', 'macOS', 'linux'];

export const TAGLINE_MAX_LENGTH = 300;
export const DESCRIPTION_MAX_LENGTH = 10000;

export const MAX_REVIEW_COUNT = 3;

export const MEGABYTES_PER_GIGABYTE = 1024;

export const COVERS_SIZES: Record<string, number[]> = {
  catalog: [88, 50],
  horizontal: [524, 295],
  horizontal_small: [254, 143],
  large_single: [744, 410],
  vertical: [200, 266],
  wide_slider: [1064, 599],
  screenshot: [1920, 1080],
};

export const COVERS = [
  'wide_slider',
  'large_single',
  'catalog',
  'horizontal',
  'horizontal_small',
  'vertical',
];

export const LINK_PLACEHOLDER = 'https://';
