import getClient from 'apolloClient';
import { USER_LOGIN, USER_LOGOUT } from 'ra-core';

const defaultClient = getClient('');

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