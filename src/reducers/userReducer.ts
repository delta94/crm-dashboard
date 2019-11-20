import { USER_LOGIN, USER_LOGOUT } from 'ra-core';
import { FETCH_USER_SUCCEEDED } from 'actions';

export default (state = null, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
    case FETCH_USER_SUCCEEDED:
      return payload.user;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};
