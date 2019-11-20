import { USER_LOGIN, USER_LOGOUT } from 'ra-core';

export default (state = null, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return payload.user;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};
