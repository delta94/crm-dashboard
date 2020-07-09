import { API_URL } from 'const';
import { createGetItemsRequest, createPublishItemRequest, createPOSTRequest, createGETRequest } from 'api';

export const postsUrl = `${API_URL}/posts`;

export const getPostsRequest = createGetItemsRequest(postsUrl);
export const publishPostRequest = createPublishItemRequest(postsUrl);
export const createOrUpdatePostRequest = createPOSTRequest(postsUrl);

export const getPostByIdRequest = async (id: string | number) => {
  const url = `${postsUrl}/${id}`;
  const request = createGETRequest(url);

  return await request();
};
