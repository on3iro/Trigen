import axios from 'axios';
import { fork, call, put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { BASE_URL } from 'config/constants';

import * as types from './actionTypes';
import * as globalMessageTypes from 'containers/GlobalMessage/ducks/actionTypes';


export function *purchaseSlots(action) {
  console.log(action.payload);
  return 'buy buy slots, buy buy happyness';
}

export function *handleSlotsPurchase() {
  yield takeLatest(types.BUY_SLOTS, purchaseSlots);
}

export default function *() {
  yield [
    fork(handleSlotsPurchase),
  ];
}
