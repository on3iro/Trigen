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
      },
      AccountFilter: 'exa',
      AccountListStatus: { isLoading: false },
      AccountStatus: { 'fakeID': { isLoading: 'false' }},
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

    it('should getAccountCount()', () => {
      expect(selectors.getAccountCount(state)).toBe(1);
    });

    it('should getAccountFilter()', () => {
      expect(selectors.getAccountFilter(state)).toBe('exa');
    });

    it('should getAccountListStatus()', () => {
      expect(selectors.getAccountListStatus(state)).toMatchSnapshot();
    });

    it('should getAccountStatus', () => {
      expect(selectors.getAccountStatus(state)).toMatchSnapshot();
    })
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

    it('should make getFilteredAccounts', () => {
      const getFilteredAccounts = selectors.makeGetFilteredAccounts();

      expect(getFilteredAccounts(state)).toMatchSnapshot();
    });

    it('should make getAccountStatusByFakeId', () => {
      const getAccountStatusByFakeID = selectors.makeGetAccountStatusByFakeID();

      expect(getAccountStatusByFakeID(state, { fakeID: 'fakeID'})).toMatchSnapshot();
    });
  });
});
