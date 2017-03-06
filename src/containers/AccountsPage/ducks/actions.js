import * as actionTypes from './actionTypes';

// Actions
export function addAccount(index) {
  return {
    type: actionTypes.ADD_ACCOUNT,
    payload: { index, data: {
      username: '',
      domain: '',
      new: true,
      edit: true,
    } }
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
    payload: { index, data: {
      ...data, edit: true
    } },
  };
}

export function cancelEdit(index) {
  return {
    type: actionTypes.CANCEL_EDIT,
    payload: { index }
  };
}

export function handleAccountChange(index, target) {
  return {
    type: actionTypes.CHANGE_ACCOUNT,
    payload: { index, target }
  };
}
