import { API_URL } from 'const';
import {
  createGETRequest,
  createPOSTRequest,
  createGetItemsRequest,
  createPublishItemRequest,
} from 'admin-library';

const gamesUrl = `${API_URL}/games`;

export const uploadMediaRequest = async (id: string, file: Blob) => {
  const url = `${gamesUrl}/media/${id}`;
  const formData = new FormData();

  formData.append('image', file);

  try {
    const res = await fetch(url, {
      method: 'PUT',
      credentials: 'include',
      body: formData,
    });

    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};

export const createOrUpdateGameRequest = createPOSTRequest(gamesUrl);
export const createGameMediaRequest = createPOSTRequest(`${gamesUrl}/media`);
export const getGamesRequest = createGetItemsRequest(gamesUrl);

export const getGameByIdRequest = async (id: string | number) => {
  const url = `${gamesUrl}/${id}`;
  const request = createGETRequest(url);

  return await request();
};

export const publishGameRequest = createPublishItemRequest(gamesUrl);
