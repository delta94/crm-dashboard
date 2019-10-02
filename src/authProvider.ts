import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK, AuthProvider } from 'ra-core';
import { env, setCookie, getCookie, deleteCookie } from 'helpers';

const logoutSrc = `${env('AUTH_URL')}/auth1/logout`;

export default (type: any, params: any) => {
  // called when the user attempts to log in
  console.log(type, params);
  if (type === AUTH_LOGIN) {
    const { success, accessToken, error } = params;

    if (!success) Promise.reject(error);

    setCookie('TOKEN', accessToken);
    return Promise.resolve();
  }
  // called when the user clicks on the logout button
  if (type === AUTH_LOGOUT) {
    deleteCookie('TOKEN');
    fetch(logoutSrc, { credentials: 'include' });
    return Promise.resolve();
  }
  // called when the user navigates to a new location
  if (type === AUTH_CHECK) {
    return getCookie('TOKEN')
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject('Unknown method');
};