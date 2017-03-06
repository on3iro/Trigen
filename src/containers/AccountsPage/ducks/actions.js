import * as actionTypes from './actionTypes';

// Actions
export function addAccount(index) {
  return {
    type: actionTypes.ADD_ACCOUNT,
    payload: { index, data: { username: '', domain: '', } }
  };
}

export function fetchAccounts() {
  return {
    type: actionTypes.GET_ACCOUNTS,
  };
}

export function editAccount(index, data) {
  return {
    type: actionTypes.EDIT_ACCOUNT,
    payload: { index, data },
  };
}
