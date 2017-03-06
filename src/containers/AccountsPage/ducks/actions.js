import * as actionTypes from './actionTypes';

// Actions
export function addAccount() {
  return {
    type: actionTypes.ADD_ACCOUNT,
    payload: {
      username: '',
      domain: '',
    }
  };
}
