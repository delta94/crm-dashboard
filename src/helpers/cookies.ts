export const setCookie = (
  name: string,
  value: string,
  expires?: Date | null,
  path?: string,
) => {
  let cookie = `${name}=${value}`;
  if (expires) { cookie = `${cookie}; expires=${expires}`; }
  if (path) { cookie = `${cookie}; path=${path}`; }
  document.cookie = cookie;
};

export const getCookie = (name: string) => {
  const matches = document.cookie.match(new RegExp(
    // eslint-disable-next-line
    `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name: string) => {
  setCookie(name, '', new Date(Date.now()));
};