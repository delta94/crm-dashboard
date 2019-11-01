import hasuraDataProvider from 'ra-data-hasura';
import { fetchUtils } from 'ra-core';
import { env, getCookie } from 'helpers';

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = getCookie('TOKEN') || '';
  options.headers.set('x-hasura-admin-secret', 'insecure');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

export default hasuraDataProvider(env('API_URL'), httpClient);
