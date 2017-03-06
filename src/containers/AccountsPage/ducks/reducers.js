import { combineReducers } from 'redux';
import shortid from 'shortid';

import * as actionTypes from './actionTypes';


// Reducer
export function AccountListReducer(state = [], action) {
  switch(action.type) {
    case actionTypes.GET_ACCOUNTS: {
      const accounts = action.payload.map(account => {
        return {
          ...account,
          fakeID: shortid.generate()
        };
      });

      return Array.concat([], state, accounts);
    }

    case actionTypes.ADD_ACCOUNT: {
      return Array.concat([], state, [{ ...action.payload.data }]);
    }

    case actionTypes.EDIT_ACCOUNT: {
      const { fakeID, data } = action.payload;
      const newArr = state.slice(0);
      const index = newArr.findIndex(val => {
        return val.fakeID === fakeID;
      });
      newArr[index] = data;

      return newArr;
    }

    case actionTypes.CANCEL_EDIT: {
      const { fakeID } = action.payload;
      let newArr = state.slice(0);
      const index = newArr.findIndex(val => {
        return val.fakeID === fakeID;
      });

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
      const { data } = action.payload;

      return { ...state, [data.fakeID]: data};
    }

    case actionTypes.EDIT_ACCOUNT: {
      const { fakeID, data } = action.payload;

      return { ...state, [fakeID]: data };
    }

    case actionTypes.CANCEL_EDIT: {
      const { fakeID } = action.payload;
      delete state[fakeID];

      return { ...state };
    }

    case actionTypes.CHANGE_ACCOUNT: {
      const { fakeID, target } = action.payload;

      return Object.assign({}, state, {
        [fakeID]: Object.assign({}, state[fakeID], {
          [target.name]: target.value,
        }),
      });
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
