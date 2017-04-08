import axios from 'axios';
import { fork, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { BASE_URL } from 'config/constants';

import * as types from './actionTypes';
import * as authTypes from 'containers/Auth/ducks/actionTypes';
import * as globalMessageTypes from 'containers/GlobalMessage/ducks/actionTypes';


export function *requestPurchase(userInfo, amount) {
  const { userID, authToken } = userInfo;

  // Post to server
  const url = `${BASE_URL}/users/${userID}/slots/add/${amount}`;
  const config = {
    headers: {
      'Authorization': authToken,
      'Content-Type': 'application/json',
    }
  };

  const response = yield call(axios.post, url, {}, config);
  return response;
}

export function *purchaseSlots(action) {
  const { userInfo, amount } = action.payload;

  try{
    const response = yield call(requestPurchase, userInfo, amount);

    // put action to update max accounts
    yield put({ type: authTypes.UPDATE_MAX_ACCOUNTS, payload: response.data.maxAccounts });
  }catch (error) {
    // display error
    yield put({ type: types.BUY_SLOTS_ERROR, payload: error.message });
    yield put({ type: globalMessageTypes.GLOBAL_ERROR, payload: error.message });
    yield call(delay, 20000);
    yield put({ type: globalMessageTypes.CLEAR_MESSAGE });
  }
}

export function *handleSlotsPurchase() {
  yield takeLatest(types.BUY_SLOTS, purchaseSlots);
}

export default function *() {
  yield [
    fork(handleSlotsPurchase),
  ];
}
