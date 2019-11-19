import jwtDecode from 'jwt-decode';

const FIELD = 'https://qilin.protocol.one/claims';

export const getUserId = (jwt: string) => {
  const decodedJwt: any = jwtDecode(jwt);

  if (!decodedJwt) return;

  const user = decodedJwt[FIELD] || {};
  const { 'user-id': userId } = user;

  return userId;
};
