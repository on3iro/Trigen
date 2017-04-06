import axios from 'axios';
import { fork, call, put, takeLatest, takeEvery } from 'redux-saga/effects';

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

export function *requestSaveNewAccount(action) {
  const { userID, authToken, EditedAccount } = action.payload;
  const url = `${BASE_URL}/users/${userID}/accounts`
  const config = {
    headers: {
      'Authorization': authToken,
      'Content-Type': 'application/json',
    },
  };
  const { domain, username } = EditedAccount;
  const data = { domain, username };

  try {
    const response = yield call(axios.post, url, data, config);
    const newAccount = { ...response.data, ...EditedAccount };

    yield put({ type: types.SAVE_NEW_ACCOUNT_SUCCESS, payload: newAccount });
  }catch (error) {
    yield put({ type: types.SAVE_NEW_ACCOUNT_ERROR, payload: error.message });
  }
}

export function *requestDeleteAccount(action) {
  const { userID, authToken, accountID } = action.payload;
  const url = `${BASE_URL}/users/${userID}/accounts/${accountID}`;
  const config = {
    headers: {
      'Authorization': authToken,
    }
  }

  try {
    const response = yield call(axios.delete, url, config);

    yield put({ type: types.DELETE_ACCOUNT_SUCCESS, payload: response });
  }catch (error) {
    yield put({ type: types.DELETE_ACCOUNT_ERROR, payload: error.message });
  }
}

export function *handleAccounts() {
  yield takeLatest(types.FETCH_ACCOUNTS, requestFetchAccounts);
  yield takeEvery(types.SAVE_NEW_ACCOUNT, requestSaveNewAccount);
  yield takeEvery(types.DELETE_ACCOUNT, requestDeleteAccount);
}

export default function *() {
  yield [
    fork(handleAccounts),
  ];
}
