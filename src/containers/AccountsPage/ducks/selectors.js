import { createSelector } from 'reselect';


// Simple input selectors
export const getAccounts = (state) => state.accounts.Accounts;
export const getEditedAccounts = (state) => state.accounts.EditedAccounts;
export const getAccountFakeID = (_, props) => props.fakeID;


export const makeGetEditedAccount = () => {
  return createSelector(
    [ getEditedAccounts, getAccountFakeID ],
    ( EditedAccounts, fakeID ) => {
      return EditedAccounts[fakeID];
    }
  );
};
