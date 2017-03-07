import * as selectors from '../selectors';


describe('Selectors', () => {
  const state = {
    accounts: {
      Accounts: [
        {
          fakeID: 'fakeID',
          id: 0,
          username: 'ttester',
          domain: 'example.com',
        }
      ],
      EditedAccounts: {
        'fakeID': {
          fakeID: 'fakeID',
          id: 0,
          username: 'dudeDudsen',
          domain: 'example.com',
        }
      }
    }
  };

  describe('Simple input selectors', () => {
    it('should getAccounts from state', () => {
      expect(selectors.getAccounts(state)).toEqual(
        [
          {
            fakeID: 'fakeID',
            id: 0,
            username: 'ttester',
            domain: 'example.com',
          }
        ]
      );
    });

    it('should getEditedAccounts from state', () => {
      expect(selectors.getEditedAccounts(state)).toEqual({
        'fakeID': {
          fakeID: 'fakeID',
          id: 0,
          username: 'dudeDudsen',
          domain: 'example.com',
        }
      });
    });

    it('should getAccountFakeID from props', () => {
      expect(selectors.getAccountFakeID(state, { fakeID: 'fakeID' })).toEqual(
        'fakeID'
      );
    });
  });

  describe('Real selectors', () => {
    it('should make getEditedAccount and get the account', () => {
      const getEditedAccount = selectors.makeGetEditedAccount();

      expect(getEditedAccount(state, { fakeID: 'fakeID' })).toEqual({
        fakeID: 'fakeID',
        id: 0,
        username: 'dudeDudsen',
        domain: 'example.com',
      });
    });
  });
});
