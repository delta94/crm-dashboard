import { createGETRequest } from 'admin-library';
import { API_URL } from 'const';

const userUrl = `${API_URL}/auth/profile`;

export const getUserRequest = createGETRequest(userUrl);
