/* eslint-disable no-case-declarations */
import { fetchUtils } from 'ra-core';
import { env } from 'helpers';
import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
  GET_MANY,
  GET_MANY_REFERENCE,
} from 'react-admin';

const apiUrl = `${env('API_URL')}/api/v1`;

const createDataProvider = (apiUrl = '', httpClient = fetchUtils.fetchJson) => (
  type: string,
  resource: string,
  params: any,
): Promise<any> => {
  switch (type) {
    case GET_LIST:
      const { page, perPage: limit } = params.pagination;
      const offset = (page - 1) * limit;

      const url = `${apiUrl}/${resource}?offset=${offset}&limit=${limit}`;

      return httpClient(url).then(({ json }) => {
        return {
          data: json[resource],
          total: json.pagination && json.pagination.total || 0,
        };
      });

    case GET_ONE:
      return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
        data: json,
      }));

    case GET_MANY:
      const requests = params.ids.map((id: string) => httpClient(`${apiUrl}/${resource}/${id}`));

      return Promise.all(requests)
        .then(responses => ({ data: responses.map(({ json }: any) => json) }));

    case GET_MANY_REFERENCE:
      return Promise.resolve({ data: {} });

    case UPDATE:
      return httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: JSON.stringify({
          ...params.data,
          id: params.id,
        }),
      }).then(({ json }) => ({ data: json }));

    case CREATE:
      return httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: json,
      }));

    case DELETE:
      return Promise.reject('Deleting not supported');

    default:
      return Promise.reject('Unknown type');
  }
};

export default createDataProvider(apiUrl);
