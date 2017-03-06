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


//Reducer
export function AccountListReducer(state = [], action) {
  switch(action.type) {
    case actionTypes.GET_ACCOUNTS: {
      return Array.concat([], state, DUMMY_ACCOUNTS);
    }
    case actionTypes.ADD_ACCOUNT: {
      return Array.concat([], state, [{
        ...action.payload.data, edit: true, new: true
      }]);
    }
    case actionTypes.EDIT_ACCOUNT: {
      const { index } = action.payload;
      const newArr = state.slice(0);
      newArr[index] = { ...newArr[index], edit: true };

      return newArr;
    }
    case actionTypes.CANCEL_EDIT: {
      const { index } = action.payload;
      let newArr = state.slice(0);
      newArr[index] = { ...newArr[index], edit: false };

      if(
        newArr[index].new &&
        newArr[index].username === '' &&
        newArr[index].domain === ''
      ) {
        newArr = [ ...newArr.slice(0, index), ...newArr.slice(index + 1)];
      }

      return newArr;
    }
    default:
      return state;
  }
}

export function EditAccountListReducer(state = {}, action) {
  switch(action.type) {
    case actionTypes.ADD_ACCOUNT: {
      const { index, data } = action.payload;

      return { ...state, [index]: data};
    }
    case actionTypes.EDIT_ACCOUNT: {
      const { index, data } = action.payload;

      return { ...state, [index]: data };
    }
    case actionTypes.CANCEL_EDIT: {
      const { index } = action.payload;
      delete state[index];

      return { ...state };
    }
    default:
      return state;
  }
}

const AccountReducer = combineReducers({
  Accounts: AccountListReducer,
  EditedAccounts: EditAccountListReducer,
});

export default AccountReducer;
