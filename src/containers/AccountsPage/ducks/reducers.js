import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';


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


// Initial State
// TODO change me!
const INITIAL_STATE = [];

//Reducer
export function AccountListReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case actionTypes.GET_ACCOUNTS:
      return Array.concat([], state, DUMMY_ACCOUNTS);
    case actionTypes.ADD_ACCOUNT:
      return Array.concat([], state, [{ ...action.payload, edit: true }]);
    default:
      return state;
  }
}

export function EditAccountListReducer(state = [], action) {
  switch(action.type) {
    case actionTypes.ADD_ACCOUNT:
      return Array.concat([], state, [action.payload]);
    default:
      return state;
  }
}

const AccountReducer = combineReducers({
  Accounts: AccountListReducer,
  EditedAccounts: EditAccountListReducer,
});

export default AccountReducer;
