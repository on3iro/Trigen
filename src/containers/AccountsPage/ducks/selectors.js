import { createSelector } from 'reselect';


// Simple input selectors
export const getAccounts = (state) => state.accounts.Accounts;
export const getEditedAccounts = (state) => state.accounts.EditedAccounts;
export const getAccountIndex = (_, props) => props.index;


export const makeGetEditedAccount = () => {
  return createSelector(
    [ getEditedAccounts, getAccountIndex ],
    ( EditedAccounts, index ) => {
      return EditedAccounts[index];
    }
  );
};
