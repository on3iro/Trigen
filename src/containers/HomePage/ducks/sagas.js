import axios from 'axios';
import { fork, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import sha256 from 'sha256';

import { BASE_URL } from 'config/constants';

import * as types from './actionTypes';


export function *fetchUserHash(userInfo) {
  const url = `${BASE_URL}/users/${userInfo.userID}/hash`;
  const config = {
    headers: {
      'Authorization': userInfo.authToken,
    }
  };

  const response = yield call(axios.get, url, config);
  return response;
}

export function *generatePassword(action) {
  const { accountInformation, userInfo, masterPassword } = action.payload;

  try {
    // fetch user hash
    const response = yield call(fetchUserHash, userInfo);
    const userHash = response.data.hash;

    // generate password
    const { domain, username } = accountInformation;
    const password = sha256(`${domain}${username}${masterPassword}${userHash}`);
    yield put({ type: types.GENERATE_PASSWORD_SUCCESS, payload: password });

    // If sill in progress (e.g. from previous creation
    // stop progress
    yield put({ type: types.STOP_PROGRESS });

    // wait 30s and then delete password
    yield put({ type: types.START_PROGRESS });
    yield call(delay, 30000);
    yield put({ type: types.STOP_PROGRESS });
    yield put({ type: types.CLEAR_PASSWORD });
  }catch (error) {
    yield put({ type: types.GENERATE_PASSWORD_ERROR, payload: error.message });
  }
}

export function *handlePasswordGeneration() {
  yield takeLatest(types.GENERATE_PASSWORD, generatePassword);
}

export default function *() {
  yield [
    fork(handlePasswordGeneration),
  ];
}
