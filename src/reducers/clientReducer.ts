import getClient from 'apolloClient';
import { USER_LOGIN, USER_LOGOUT } from 'ra-core';
import { getCookie } from 'helpers';

const token = getCookie('TOKEN') || '';
const defaultClient = getClient(token);

export default (state = defaultClient, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return getClient(payload.jwt);
    case USER_LOGOUT:
      return getClient('');
    default:
      return state;
  }
};
