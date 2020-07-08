import { API_URL } from 'const';
import { createGetItemsRequest, createPublishItemRequest } from 'api';

export const postsUrl = `${API_URL}/posts`;

export const getPostsRequest = createGetItemsRequest(postsUrl);
export const publishPostRequest = createPublishItemRequest(postsUrl);
