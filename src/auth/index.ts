import { API_URL } from 'const';

const baseLoginUrl = `${API_URL}/auth/login`;
const baseLogoutUrl = `${API_URL}/auth/logout`;

export const LOGIN_REQUIRED = 'login_required';
export const HAS_SESSION = 'has_session';

export const login = () => {
  const redirectUrl = window.location.href;
  const loginUrl = `${baseLoginUrl}?redirect=${redirectUrl}`;

  window.location.href = loginUrl;
};

export const logout = () => {
  const redirectUrl = window.location.href;
  const logoutUrl = `${baseLogoutUrl}?redirect=${redirectUrl}`;

  window.location.href = logoutUrl;
};

export const restoreSessionOnEnter = () => {
  const redirectUrl = window.location.href;
  const restoreSessionUrl = `${baseLoginUrl}?redirect=${redirectUrl}&prompt=none`;

  document.cookie = `${HAS_SESSION}=true`;

  window.location.href = restoreSessionUrl;
};
