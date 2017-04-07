import * as reducers from '../reducers';
import * as types from '../actionTypes';
import * as authTypes from 'containers/Auth/ducks/actionTypes';


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
      expect(reducers.AccountListReducer(undefined, {}))
        .toEqual([]);
    });

    it('should handle FETCH_ACCOUNTS_SUCCESS', () => {
      const genIDMock = jest.fn(() => 'fakeID');
      expect(reducers.AccountListReducer(undefined, {
        type: types.FETCH_ACCOUNTS_SUCCESS,
        payload: {
          response: {
            data: [
              {
                id: 0,
                username: 'ttester',
                domain: 'example.com',
              }
            ],
          },
          genIDFunc: genIDMock
        }
      })).toMatchSnapshot();
      expect(genIDMock).toHaveBeenCalled();
    });

    it('should handle ADD_ACCOUNT', () => {
      expect(reducers.AccountListReducer([], {
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
      expect(reducers.AccountListReducer(INITIAL_STATE, action)).toMatchSnapshot();
    });

    it('should handle SAVE_NEW_ACCOUNT_SUCCESS', () => {
      const initialState = [ { ...INITIAL_STATE[0], edit: true } ];
      const action = {
        type: types.SAVE_NEW_ACCOUNT_SUCCESS,
        payload: {
          ...INITIAL_STATE[0],
          username: 'dudeDudsen',
        }
      };

      expect(reducers.AccountListReducer(initialState, action)).toMatchSnapshot();
    });

    it('should handle UPDATE_ACCOUNT_SUCCESS', () => {
      const initialState = [ { ...INITIAL_STATE[0], edit: true } ];
      const action = {
        type: types.UPDATE_ACCOUNT_SUCCESS,
        payload: {
          ...INITIAL_STATE[0],
          username: 'dudeDudsen',
        }
      };

      expect(reducers.AccountListReducer(initialState, action)).toMatchSnapshot();
    });

    it('should handle CANCEL_EDIT with existing account', () => {
      const action = {
        type: types.CANCEL_EDIT,
        payload: { fakeID: 'fakeID' },
      };

      expect(reducers.AccountListReducer(INITIAL_STATE, action))
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

      expect(reducers.AccountListReducer(initialState, action))
        .toMatchSnapshot();
    });

    it('should handle DELETE_ACCOUNT_SUCCESS', () => {
      const action = {
        type: types.DELETE_ACCOUNT_SUCCESS,
        payload: {
          data: {
            id: 'aID',
          }
        }
      };

      expect(reducers.AccountListReducer(INITIAL_STATE, action))
        .toMatchSnapshot();
    })

    it('should handle authTypes.LOGOUT', () => {
      expect(reducers.AccountListReducer(INITIAL_STATE, { type: authTypes.LOGOUT }))
        .toEqual([]);
    });
  });

  describe('AccountListStatusReducer', () => {
    const INITIAL_STATE = {
      fetched: false,
      errored: false,
      isLoading: false,
    };

    it('should return initial state', () => {
      expect(reducers.AccountListStatusReducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    it('should handle FETCH_ACCOUNTS', () => {
      expect(reducers.AccountListStatusReducer(INITIAL_STATE, { type: types.FETCH_ACCOUNTS }))
        .toMatchSnapshot();
    })

    it('should handle FETCH_ACCOUNTS_SUCCESS', () => {
      expect(reducers.AccountListStatusReducer(INITIAL_STATE, { type: types.FETCH_ACCOUNTS_SUCCESS }))
        .toMatchSnapshot();
    })

    it('should handle FETCH_ACCOUNTS_ERROR', () => {
      expect(reducers.AccountListStatusReducer(INITIAL_STATE, { type: types.FETCH_ACCOUNTS_ERROR }))
        .toMatchSnapshot();
    })

    it('should handle authTypes.LOGOUT', () => {
      expect(reducers.AccountListStatusReducer(INITIAL_STATE, { type: authTypes.LOGOUT }))
        .toMatchSnapshot();
    })
  });

  describe('EditAccountListReducer', () => {
    it('should return unmodified state as default', () => {
      expect(reducers.EditAccountListReducer(undefined, { type: '', payload: { fakeID: ''} })).toMatchSnapshot();
    });

    it('should handle ADD_ACCOUNT', () => {
      const action = {
        type: types.ADD_ACCOUNT,
        payload: { data: {
          fakeID: 'fakeID',
          test: 'test',
        }}
      };

      expect(reducers.EditAccountListReducer({}, action))
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

      expect(reducers.EditAccountListReducer({}, action))
        .toMatchSnapshot();
    });

    it('should handle SAVE_NEW_ACCOUNT', () => {
      const initialState = {
        'fakeID': {
          test: 'test'
        }
      };
      const action = {
        type: types.SAVE_NEW_ACCOUNT,
        payload: { EditedAccount: { fakeID: 'fakeID' } }
      };

      expect(reducers.EditAccountListReducer(initialState, action))
        .toMatchSnapshot();
    });

    it('should handle CANCEL_EDIT', () => {
      const initialState = { 'fakeID': { test: 'test' }};
      const action = {
        type: types.CANCEL_EDIT,
        payload: { fakeID: 'fakeID' }
      };

      expect(reducers.EditAccountListReducer(initialState, action))
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

      expect(reducers.EditAccountListReducer(initialState, action))
        .toMatchSnapshot();
    });

    it('should handle authTypes.LOGOUT', () => {
      expect(reducers.EditAccountListReducer(undefined, {
        type: authTypes.LOGOUT
      })).toEqual({});
    });
  });

  describe('AccountStatusReducer', () => {
    it('should return initial state', () => {
      expect(reducers.AccountStatusReducer(undefined, {})).toEqual({});
    })

    it('should handle SAVE_NEW_ACCOUNT', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.SAVE_NEW_ACCOUNT,
        payload: {
          EditedAccount: {
            fakeID: 'fake123',
          }
        }
      })).toMatchSnapshot();
    });

    it('should handle UPDATE_ACCOUNT', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.UPDATE_ACCOUNT,
        payload: {
          EditedAccount: {
            fakeID: 'fake123',
          }
        }
      })).toMatchSnapshot();
    });

    it('should handle DELETE_ACCOUNT', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.DELETE_ACCOUNT,
        payload: {
          fakeID: 'fake123',
        }
      })).toMatchSnapshot();
    });

    it('should handle SAVE_NEW_ACCOUNT_SUCCESS', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.SAVE_NEW_ACCOUNT_SUCCESS,
        payload: {
          fakeID: 'fake123',
        }
      })).toMatchSnapshot();
    });

    it('should handle DELETE_ACCOUNT_SUCCESS', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.DELETE_ACCOUNT_SUCCESS,
        payload: {
          fakeID: 'fake123',
        }
      })).toMatchSnapshot();
    });

    it('should handle UPDATE_ACCOUNT_SUCCESS', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.UPDATE_ACCOUNT_SUCCESS,
        payload: {
          fakeID: 'fake123',
        }
      })).toMatchSnapshot();
    });

    it('should handle SAVE_NEW_ACCOUNT_ERROR', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.SAVE_NEW_ACCOUNT_ERROR,
        payload: {
          fakeID: 'fake123',
        }
      })).toMatchSnapshot();
    });

    it('should handle UPDATE_ACCOUNT_ERROR', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.UPDATE_ACCOUNT_ERROR,
        payload: {
          fakeID: 'fake123',
        }
      })).toMatchSnapshot();
    });

    it('should handle DELETE_ACCOUNT_ERROR', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: types.DELETE_ACCOUNT_ERROR,
        payload: {
          fakeID: 'fake123',
        }
      })).toMatchSnapshot();
    });

    it('should handle authTypes.LOGOUT', () => {
      expect(reducers.AccountStatusReducer(undefined, {
        type: authTypes.LOGOUT
      })).toEqual({});
    });
  });

  describe('AccountFilterReducer', () => {
    it('should return intial state', () => {
      expect(reducers.AccountFilterReducer('', {
        type: types.FILTER_ACCOUNT,
        payload: 'bla',
      })).toEqual();
    });
  });

});
