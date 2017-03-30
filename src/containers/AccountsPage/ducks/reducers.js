import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';


// Reducer
export function AccountListReducer(state = [], action) {
  switch(action.type) {
    case actionTypes.GET_ACCOUNTS: {
      const { accounts, genID } = action.payload;
      const accountList = accounts.map(account => {
        return {
          ...account,
          fakeID: genID(),
          edit: false,
        };
      });

      return Array.concat([], accountList);
    }

    case actionTypes.ADD_ACCOUNT: {
      return Array.concat([], [{ ...action.payload.data }], state);
    }

    case actionTypes.EDIT_ACCOUNT: {
      const { fakeID, data } = action.payload;
      const newArr = state.slice(0);
      const index = newArr.findIndex(val => {
        return val.fakeID === fakeID;
      });
      newArr[index] = { ...newArr[index], ...data };

      return newArr;
    }

    case actionTypes.SAVE_ACCOUNT: {
      const account = action.payload;
      const newArr = state.slice(0);
      const index = newArr.findIndex(val => {
        return val.fakeID === account.fakeID;
      });
      newArr[index] = { ...account, new: false, edit: false };

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

    case actionTypes.DELETE_ACCOUNT: {
      const { fakeID } = action.payload;
      const index = state.findIndex(val => {
        return val.fakeID === fakeID;
      });

      const newArr = [ ...state.slice(0, index), ...state.slice(index + 1)];
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

    case actionTypes.SAVE_ACCOUNT: {
      const account = action.payload;
      delete state[account.fakeID];

      return { ...state };
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

export function AccountFilterReducer( state = '', action) {
  switch(action.type) {
    case actionTypes.FILTER_ACCOUNT: {
      const { filter } = action.payload;
      return filter;
    }

    default: {
      return state;
    }
  }
}

const AccountReducer = combineReducers({
  Accounts: AccountListReducer,
  EditedAccounts: EditAccountListReducer,
  AccountFilter: AccountFilterReducer,
});

export default AccountReducer;
