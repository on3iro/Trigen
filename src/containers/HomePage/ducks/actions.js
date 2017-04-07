import * as types from './actionTypes';

export const generatePassword = (accountInformation, userInfo, masterPassword) => {
  return {
    type: types.GENERATE_PASSWORD,
    payload: { accountInformation, userInfo, masterPassword }
  };
};
