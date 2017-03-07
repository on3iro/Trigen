import * as actionTypes from './actionTypes';

// Actions
export function addAccount(fakeID) {
  return {
    type: actionTypes.ADD_ACCOUNT,
    payload: { data: {
      username: '',
      domain: '',
      new: true,
      edit: true,
      fakeID,
    } }
  };
}

export function fetchAccounts() {
  const DUMMY_ACCOUNTS =   [
    {
      id: 0,
      username: 'tTester',
      domain: 'example.com'
    },
    {
      id: 1,
      username: 'LSP',
      domain: 'Ooo.com'
    }
  ];

  return {
    type: actionTypes.GET_ACCOUNTS,
    payload: DUMMY_ACCOUNTS
  };
}

export function editAccount(fakeID, data) {
  return {
    type: actionTypes.EDIT_ACCOUNT,
    payload: { fakeID, data: {
      ...data, edit: true
    } },
  };
}

export function saveAccount(EditedAccount) {
  return {
    type: actionTypes.SAVE_ACCOUNT,
    payload: EditedAccount,
  };
}

export function cancelEdit(fakeID) {
  return {
    type: actionTypes.CANCEL_EDIT,
    payload: { fakeID }
  };
}

export function deleteAccount(fakeID) {
  return {
    type: actionTypes.DELETE_ACCOUNT,
    payload: { fakeID }
  };
}

export function handleAccountChange(fakeID, target) {
  return {
    type: actionTypes.CHANGE_ACCOUNT,
    payload: { fakeID, target }
  };
}
