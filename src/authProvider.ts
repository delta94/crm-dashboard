import { AUTH_LOGIN, AUTH_LOGOUT, AuthActionType } from 'ra-core';
import { getCookie, setCookie } from 'helpers';
// TODO change mockClient to client
import client from 'api/mockClient';
import { SIGN_IN_MUTATION, SIGN_UP_MUTATION, RECOVERY_MUTATION } from 'api';

const checkData = ({ ok, errors }: { ok: boolean; errors: any }) => {
  if (!ok) throw new Error(errors[0]);
};

export default async (type: AuthActionType, params: any) => {
  try {
    if (type === AUTH_LOGIN) {
      const { username, password, authType = 'signin' } = params;
      if (authType === 'signin') {
        const data: any = await client.mutate({
          mutation: SIGN_IN_MUTATION,
          variables: { username, password },
        });
        checkData(data.signin);
        localStorage.setItem('username', username);
        return Promise.resolve();
      }

      if (authType === 'signup') {
        const data: any = await client.mutate({
          mutation: SIGN_UP_MUTATION,
          variables: { username, password },
        });

        checkData(data.signup);
        return Promise.resolve();
      }

      if (authType === 'recovery') {
        const data: any = await client.mutate({
          mutation: RECOVERY_MUTATION,
          variables: { username, password },
        });

        checkData(data.recovery);
        return Promise.resolve();
      }


      throw new Error('Authorization error');
    }
    if (type === AUTH_LOGOUT) {
      localStorage.removeItem('username');
      return Promise.resolve();
    }
  } catch (err) {
    return Promise.reject(err.message);
  }
};
