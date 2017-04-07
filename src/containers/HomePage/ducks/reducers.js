import { combineReducers } from 'redux';

import * as types from './actionTypes';


export const Password = (state = '', action) => {
  switch(action.type) {
    case types.GENERATE_PASSWORD_SUCCESS: {
      return action.payload;
    }

    case types.GENERATE_PASSWORD_ERROR: {
      return action.payload;
    }

    case types.CLEAR_PASSWORD: {
      return '';
    }

    default:
      return state;
  }
};

export const InProgress = (state = false, action) => {
  switch(action.type) {
    case types.START_PROGRESS: {
      return true;
    }

    case types.STOP_PROGRESS: {
      return false;
    }

    default: {
      return state;
    }
  }
}

const PasswordReducer = combineReducers({
  Password,
  InProgress,
});

export default PasswordReducer;
