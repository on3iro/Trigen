import axios from 'axios';
import { fork, call, put, takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes';


// Login
export function *requestLogin(action) {
  const url = 'http://localhost:3030/api/auth/login';
  const config = {
    headers: {'Content-Type': 'application/json'},
  };

  try {
    // TODO change back!
    // const response = yield call(axios.post, url, action.payload, config);
    const response = {
      data: {
        token: 'testtoken',
        user: {
          id: '1',
          name: 'testuser',
          email: 'test@test.com',
          maxAccounts: 5,
        }
      }
    };

    yield put({ type: types.LOGIN_SUCCESS, payload: response.data });
  }catch (error) {
    yield put({ type: types.LOGIN_ERROR, payload: error.message });
  }
}

// Register
export function *requestRegister(action) {
  const url = 'http://localhost:3030/api/auth/register';
  const config = {
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = yield call(axios.post, url, action.payload, config);
    yield put({ type: types.REGISTER_SUCCESS, payload: response.data });
  }catch (error) {
    yield put({ type: types.REGISTER_ERROR, payload: error.response });
  }
}

// Auth watcher
export function *handleAuth() {
  yield takeLatest(types.LOGIN_SUBMIT, requestLogin);
  yield takeLatest(types.REGISTER_SUBMIT, requestRegister);
}

export default function *() {
  yield [
    fork(handleAuth),
  ];
}
