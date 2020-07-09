import { API_URL } from 'const';

const developersUrl = `${API_URL}/developers`;
const publishersUrl = `${API_URL}/publishers`;
const tagsUrl = `${API_URL}/tags`;
const genresUrl = `${API_URL}/genres`;
const featuresUrl = `${API_URL}/features`;
const languagesUrl = `${API_URL}/languages`;

export const createGETRequest = (url: string) => async () => {
  try {
    const res = await fetch(url);
    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const createPOSTRequest = (url: string) => async (data: any) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const createGetItemsRequest = (itemsUrl: string) => async (offset: number, limit: number) => {
  const url = `${itemsUrl}?Offset=${offset}&Limit=${limit}`;
  const request = createGETRequest(url);

  return await request();
};

export const createPublishItemRequest = (itemsUrl: string) => async (id: string | number) => {
  const url = `${itemsUrl}/${id}/publish`;

  const request = createPOSTRequest(url);

  return await request({});
};

export const getDevelopersRequest = createGETRequest(developersUrl);
export const getPublishersRequest = createGETRequest(publishersUrl);
export const getTagsRequest = createGETRequest(tagsUrl);
export const getGenresRequest = createGETRequest(genresUrl);
export const getFeaturesRequest = createGETRequest(featuresUrl);
export const getLanguagesRequest = createGETRequest(languagesUrl);
