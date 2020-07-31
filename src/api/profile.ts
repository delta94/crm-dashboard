import { createGETRequest } from 'admin-library';
import { API_URL } from 'const';

const userUrl = `${API_URL}/auth/profile`;

export const getUserRequest = async () => {
  try {
    const res = await fetch(userUrl, {
      credentials: 'include',
    });
    const json = await res.json();
  
    if (res.status !== 200) throw new Error(json.error);
  
    return { json };
  } catch (error) {
    return { error };
  }
  
};
