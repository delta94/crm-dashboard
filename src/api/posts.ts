import { API_URL } from 'const';
import {
  createGetItemsRequest,
  createPublishItemRequest,
  createPOSTRequest,
  createGETRequest,
} from 'admin-library';

export const postsUrl = `${API_URL}/posts`;

export const getPostsRequest = createGetItemsRequest(postsUrl);
export const publishPostRequest = createPublishItemRequest(postsUrl);
export const createOrUpdatePostRequest = createPOSTRequest(postsUrl);

export const getPostByIdRequest = async (id: string | number) => {
  const url = `${postsUrl}/${id}`;
  const request = createGETRequest(url);

  return await request();
};

export const changePostToDraftRequest = async (id: string | number) => {
  const url = `${postsUrl}/${id}/draft`;

  const request = createPOSTRequest(url);

  return await request({});
};

export const deletePostRequest = async (id: string | number) => {
  const url = `${postsUrl}/${id}`;

  try {
    const res = await fetch(url, {
      method: 'DELETE',
    });

    const json = await res.json();

    if (res.status !== 200) throw new Error(json.error);

    return { json };
  } catch (error) {
    return { error };
  }
};
