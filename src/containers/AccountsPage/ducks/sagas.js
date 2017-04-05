import axios from 'axios';
import { fork, call, put, takeLatest } from 'redux-saga/effects';

import { BASE_URL } from 'config/constants';

import * as types from './actionTypes';


export function *requestFetchAccounts(action) {
  const { userID, genIDFunc, authToken } = action.payload;
  const url = `${BASE_URL }/users/${userID}/accounts`;
  const config = {
    headers: {
      'Authorization': authToken
    },
  };

  try {
    const response = yield call(axios.get, url, config);

    yield put({ type: types.FETCH_ACCOUNTS_SUCCESS, payload: { genIDFunc, response}});
  }catch (error) {
    yield put({ type: types.FETCH_ACCOUNTS_ERROR, payload: error.message});
  }
}

export function *handleAccounts() {
  yield takeLatest(types.FETCH_ACCOUNTS, requestFetchAccounts);
}

export default function *() {
  yield [
    fork(handleAccounts),
  ];
}
