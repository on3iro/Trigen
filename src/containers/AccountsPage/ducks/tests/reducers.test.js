import { AccountListReducer, EditAccountListReducer } from '../reducers';
import * as types from '../actionTypes';


describe('Reducers', () => {
  describe('AccountListReducer', () => {
    const INITIAL_STATE = [
      {
        fakeID: 'fakeID',
        id: 0,
        username: 'ttester',
        domain: 'example.com',
        edit: false,
      }
    ];

    it('should return unmodified state as default', () => {
      expect(AccountListReducer(undefined, {}))
        .toEqual([]);
    });

    it('should handle FETCH_ACCOUNTS_SUCCESS', () => {
      const genIDMock = jest.fn(() => 'fakeID');
      expect(AccountListReducer(undefined, {
        type: types.FETCH_ACCOUNTS_SUCCESS,
        payload: {
          accounts: [
            {
              id: 0,
              username: 'ttester',
              domain: 'example.com',
            }
          ],
          genID: genIDMock
        }
      })).toMatchSnapshot();
      expect(genIDMock).toHaveBeenCalled();
    });

    it('should handle ADD_ACCOUNT', () => {
      expect(AccountListReducer([], {
        type: types.ADD_ACCOUNT,
        payload: { data : {
          test: 'test',
        }}
      })).toMatchSnapshot();
    });

    it('should handle EDIT_ACCOUNT', () => {
      const action = {
        type: types.EDIT_ACCOUNT,
        payload: { fakeID: 'fakeID', data: {
          username: 'dudeDudsen',
          domain: 'example.com',
          edit: true,
        }}
      };
      expect(AccountListReducer(INITIAL_STATE, action)).toMatchSnapshot();
    });

    it('should handle SAVE_ACCOUNT', () => {
      const initialState = [ { ...INITIAL_STATE[0], edit: true } ];
      const action = {
        type: types.SAVE_ACCOUNT,
        payload: {
          ...INITIAL_STATE[0],
          username: 'dudeDudsen',
        }
      };

      expect(AccountListReducer(initialState, action)).toMatchSnapshot();
    });

    it('should handle CANCEL_EDIT with existing account', () => {
      const action = {
        type: types.CANCEL_EDIT,
        payload: { fakeID: 'fakeID' },
      };

      expect(AccountListReducer(INITIAL_STATE, action))
        .toMatchSnapshot();
    });

    it('should handle CANCEL_EDIT with empty new account', () => {
      const initialState = [ {
        ...INITIAL_STATE[0],
        new: true,
        domain: '',
        username: '',
      } ];
      const action = {
        type: types.CANCEL_EDIT,
        payload: { fakeID: 'fakeID' }
      };

      expect(AccountListReducer(initialState, action))
        .toMatchSnapshot();
    });

    it('should handle DELETE_ACCOUNT', () => {
      const action = {
        type: types.DELETE_ACCOUNT,
        payload: { fakeID: 'fakeID' }
      };

      expect(AccountListReducer(INITIAL_STATE, action))
        .toMatchSnapshot();
    })
  });

  describe('EditAccountListReducer', () => {
    it('should return unmodified state as default', () => {
      expect(EditAccountListReducer(undefined, {}))
        .toMatchSnapshot();
    });

    it('should handle ADD_ACCOUNT', () => {
      const action = {
        type: types.ADD_ACCOUNT,
        payload: { data: {
          fakeID: 'fakeID',
          test: 'test',
        }}
      };

      expect(EditAccountListReducer({}, action))
        .toMatchSnapshot();
    });

    it('should handle EDIT_ACCOUNT', () => {
      const action = {
        type: types.EDIT_ACCOUNT,
        payload: { fakeID: 'fakeID', data: {
          fakeID: 'fakeID',
          test: 'test',
        }}
      };

      expect(EditAccountListReducer({}, action))
        .toMatchSnapshot();
    });

    it('should handle SAVE_ACCOUNT', () => {
      const initialState = {
        'fakeID': {
          test: 'test'
        }
      };
      const action = {
        type: types.SAVE_ACCOUNT,
        payload: { fakeID: 'fakeID' }
      };

      expect(EditAccountListReducer(initialState, action))
        .toMatchSnapshot();
    });

    it('should handle CANCEL_EDIT', () => {
      const initialState = { 'fakeID': { test: 'test' }};
      const action = {
        type: types.CANCEL_EDIT,
        payload: { fakeID: 'fakeID' }
      };

      expect(EditAccountListReducer(initialState, action))
        .toMatchSnapshot();
    });

    it('should handle CHANGE_ACCOUNT', () => {
      const initialState = {
        'fakeID': {
          fakeID: 'fakeID',
          username: 'ttester',
          domain: 'example.com',
        }
      };
      const action = {
        type: types.CHANGE_ACCOUNT,
        payload: {
          fakeID: 'fakeID',
          target: {
            name: 'username',
            value: 'dudeDudsen',
          }
        }
      };

      expect(EditAccountListReducer(initialState, action))
        .toMatchSnapshot();
    });
  });
});
