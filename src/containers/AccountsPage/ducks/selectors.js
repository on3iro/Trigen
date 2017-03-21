import { createSelector } from 'reselect';


// Simple input selectors
export const getAccounts = (state) => state.accounts.Accounts;
export const getEditedAccounts = (state) => state.accounts.EditedAccounts;
export const getAccountFakeID = (_, props) => props.fakeID;
export const getAccountFilter = (state) => state.accounts.AccountFilter;


export const makeGetEditedAccount = () => {
  return createSelector(
    [ getEditedAccounts, getAccountFakeID ],
    ( EditedAccounts, fakeID ) => {
      return EditedAccounts[fakeID];
    }
  );
};

export const makeGetFilteredAccounts = () => {
  return createSelector(
    [ getAccounts, getAccountFilter ],
    ( accounts, filter ) => {
      const filteredAccounts = accounts.filter(account => {
        return (
          account.username.includes(filter) ||
          account.domain.includes(filter)
        );
      });

      return filteredAccounts;
    }
  );
};
