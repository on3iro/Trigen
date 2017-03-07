import * as types from '../actionTypes';
import * as actions from '../actions';


describe('actions', () => {
  it('should create an action to add an account', () => {
    const expectedAction = {
      type: types.ADD_ACCOUNT,
      payload: { data: {
        username: '',
        domain: '',
        new: true,
        edit: true,
        fakeID: 'fakeID',
      }}
    };

    expect(actions.addAccount('fakeID')).toEqual(expectedAction);
  });

  it('should create an action to fetch accounts', () => {
    const expectedAction = {
      type: types.GET_ACCOUNTS,
      payload: {
        accounts: [
          {
            id: 0,
            username: 'tTester',
            domain: 'example.com'
          },
          {
            id: 1,
            username: 'LSP',
            domain: 'Ooo.com'
          }
        ],
        genID: 'insert function here',
      }
    };

    expect(actions.fetchAccounts('insert function here')).toEqual(expectedAction);
  });

  it('should create an action to set account to edit mode', () => {
    const expectedAction = {
      type: types.EDIT_ACCOUNT,
      payload: { fakeID: 'fakeID', data: {
        test: 'test',
        edit: true,
      }}
    };

    expect(actions.editAccount('fakeID', {
      test: 'test',
    })).toEqual(expectedAction);
  });

  it('should create an action to save an edited account', () => {
    const expectedAction = {
      type: types.SAVE_ACCOUNT,
      payload: {
        test: 'test',
      }
    };

    expect(actions.saveAccount({ test: 'test' })).toEqual(expectedAction);
  });

  it('should create an action to cancel edited changes', () => {
    const expectedAction = {
      type: types.CANCEL_EDIT,
      payload: { fakeID: 'fakeID' }
    };

    expect(actions.cancelEdit('fakeID')).toEqual(expectedAction);
  });

  it('should create an action to delete an account', () => {
    const expectedAction = {
      type: types.DELETE_ACCOUNT,
      payload: { fakeID: 'fakeID' }
    };

    expect(actions.deleteAccount('fakeID')).toEqual(expectedAction);
  });

  it('should create an action to handle account changes', () => {
    const expectedAction = {
      type: types.CHANGE_ACCOUNT,
      payload: { fakeID: 'fakeID', target: {
        test: 'test'
      }}
    };

    expect(actions.handleAccountChange('fakeID', { test: 'test' })).toEqual(expectedAction);
  });
});
