import * as types from './actionTypes';

export const purchaseSlots = (userInfo, amount) => {
  return {
    type: types.BUY_SLOTS,
    payload: { userInfo, amount }
  };
};
