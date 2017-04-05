import { combineReducers } from 'redux';

import * as types from './actionTypes';


const user = (state = {
  isLoggedIn: false,
  hasRegistered: false,
  token: '',
  data: {},
  error: {},
}, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        isLoggedIn: true,
        token: data.token,
        data: data.user,
        error: '',
      };
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        hasRegistered: true,
      };
    }

    case types.REGISTER_ERROR:
    case types.LOGIN_ERROR: {
      const error = action.payload;

      return {
        ...state,
        error: error,
      };
    }

    case types.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        data: {},
      };
    }

    default: {
      return state;
    }
  }
};

const authReducer = combineReducers({
  user,
});

export default authReducer;
