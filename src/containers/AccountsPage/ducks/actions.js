import * as actionTypes from './actionTypes';

// Actions

/**
  * Adds a new account entry to the accounts list and to the EditedAccounts list.
  *
  * @param {string} fakeID -- Internal ID to refer to and synchronize entries in the accounts
  * and EditedAccounts lists
  *
  * @return {Object} -- An action object with the type ADD_ACCOUNT
  */
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

/**
 * TODO
 * This is currently only implemented as a way to fetch some dummy-data and
 * needs to be implemented with an actual request.
  */
export function fetchAccounts(genID) {
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
    payload: { accounts: DUMMY_ACCOUNTS, genID }
  };
}

/**
  * Changes the data of an entry inside the EditedAccount list.
  *
  * @param {String} fakeID -- Internal identifier to synchronize entries between lists
  * @param {Object} data -- New data for the updated entry
  *
  * @return {Object} -- Action with the type EDIT_ACCOUNT
  */
export function editAccount(fakeID, data) {
  return {
    type: actionTypes.EDIT_ACCOUNT,
    payload: { fakeID, data: {
      ...data, edit: true
    } },
  };
}

/**
 * Transfers data from an EditedAccount to the respective account inside
 * the accounts list.
 * TODO
 * A request needs to be implemented which patches/posts the new data to the server
  */
export function saveAccount(EditedAccount) {
  return {
    type: actionTypes.SAVE_ACCOUNT,
    payload: EditedAccount,
  };
}

/**
 * Deletes an EditedAccount from the respective list and basically reverts all changes
 * made.
 *
 * @param {String} fakeID -- Internal entry reference
 *
 * @return {Object} -- Action of the type CANCEL_EDIT
  */
export function cancelEdit(fakeID) {
  return {
    type: actionTypes.CANCEL_EDIT,
    payload: { fakeID }
  };
}

/**
  * Deletes an account from the accounts list.
  * TODO
  * A request needs to be implemented which also deletes the account from the database
  *
  * @param {String} fakeID -- Internal entry reference
  *
  * @return {Object} -- Aciton of the type DELETE_ACCOUNT
  */
export function deleteAccount(fakeID) {
  return {
    type: actionTypes.DELETE_ACCOUNT,
    payload: { fakeID }
  };
}

/**
 * Transfers the user made changes on an input to the respective entry inside
 * the EditedAccounts list.
 *
 * @param {String} fakeID -- Internal reference to the respective entry
 * @param {Object} target -- Target of the event which should contain a name and a value as properties
 *
 * @return {Object} -- Action with the type CHANGE_ACCOUNT
  */
export function handleAccountChange(fakeID, target) {
  return {
    type: actionTypes.CHANGE_ACCOUNT,
    payload: { fakeID, target }
  };
}
