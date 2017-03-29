import axios from 'axios';
import { fork, call, put, takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes';


// Login
export function *requestLogin(data) {
  const url = 'http://localhost:3030/api/auth/login';
  const config = {
    headers: {'Content-Type': 'application/json'},
  };

  try {
    // TODO change back!
    // const response = yield call(axios.post, url, data, config);
    const response = {
      data: {
        token: 'testtoke',
        user: {
          id: '1',
          name: 'testuser',
          email: 'test@test.com',
        }
      }
    };

    yield put({ type: types.LOGIN_SUCCESS, payload: response.data });
  }catch (error) {
    yield put({ type: types.LOGIN_ERROR, payload: error.message });
  }
}

export function *authorize(action) {
  yield call(requestLogin, action.payload);
}

// Register
export function *requestRegister(data) {
  const url = 'http://localhost:3030/api/auth/register';
  const config = {
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = yield call(axios.post, url, data, config);
    yield put({ type: types.REGISTER_SUCCESS, payload: response.data });
  }catch (error) {
    yield put({ type: types.REGISTER_ERROR, payload: error.response });
  }
}

export function *register(action) {
  yield call(requestRegister, action.payload);
}

// Auth watcher
export function *handleAuth() {
  yield takeLatest(types.LOGIN_SUBMIT, authorize);
  yield takeLatest(types.REGISTER_SUBMIT, register);
}

export default function *() {
  yield [
    fork(handleAuth),
  ];
}
