import { API_URL } from 'const';

const gamesUrl = `${API_URL}/games`;
const developersUrl = `${API_URL}/developers`;
const publishersUrl = `${API_URL}/publishers`;
const tagsUrl = `${API_URL}/tags`;
const genresUrl = `${API_URL}/genres`;
const featuresUrl = `${API_URL}/features`;

const getGETRequest = (url: string) => async () => {
  try {
    const res = await fetch(url);
    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

const getPOSTRequest = (url: string) => async (data: any) => {
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

export const uploadMediaRequest = async (id: string, file: Blob) => {
  const url = `${gamesUrl}/media/${id}`;
  const formData = new FormData();

  formData.append('image', file);

  try {
    const res = await fetch(url, {
      method: 'PUT',
      body: formData,
    });

    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const getDevelopersRequest = getGETRequest(developersUrl);
export const getPublishersRequest = getGETRequest(publishersUrl);
export const getTagsRequest = getGETRequest(tagsUrl);
export const getGenresRequest = getGETRequest(genresUrl);
export const getFeaturesRequest = getGETRequest(featuresUrl);

export const createOrUpdateGameRequest = getPOSTRequest(gamesUrl);
export const createGameMediaRequest = getPOSTRequest(`${gamesUrl}/media`);

export const getGamesRequest = async (offset: number, limit: number) => {
  const url = `${gamesUrl}?Offset=${offset}&Limit=${limit}`;
  const request = getGETRequest(url);

  return await request();
};

export const getGameByIdRequest = async (id: string) => {
  const url = `${gamesUrl}/${id}`;
  const request = getGETRequest(url);

  return await request();
};

export const publishGameRequest = async (id: string) => {
  const url = `${gamesUrl}/${id}/publish`;

  const request = getPOSTRequest(url);

  return await request({});
};
