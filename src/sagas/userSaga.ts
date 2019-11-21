import { put, call } from 'redux-saga/effects';
import { FETCH_USER_SUCCEEDED, FETCH_USER_FAILED } from 'actions';
import { getCookie, getUserId, getUser } from 'helpers';
import getClient from 'apolloClient';

const fetchUser = async () => {
  const token = getCookie('TOKEN');

  if (!token) return null;

  const id = getUserId(token);

  if (!id) return null;

  const client = getClient(token);
  const user = await getUser(client, +id);

  return user;
};

export function* userSaga() {
  try {
    const user = yield call(fetchUser);
    yield put({ type: FETCH_USER_SUCCEEDED, payload: { user } });
  } catch (e) {
    yield put({ type: FETCH_USER_FAILED });
  }
}
