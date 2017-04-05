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
    expect(actions.fetchAccounts('userID', 'tokenXYZ', 'insert function here')).toMatchSnapshot();
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
    })).toMatchSnapshot();
  });

  it('should create an action to save a new account', () => {
    const expectedAction = {
      type: types.SAVE_NEW_ACCOUNT,
      payload: {
        test: 'test',
      }
    };

    expect(actions.saveNewAccount({ test: 'test' })).toMatchSnapshot();
  });

  it('should create an action to cancel edited changes', () => {
    const expectedAction = {
      type: types.CANCEL_EDIT,
      payload: { fakeID: 'fakeID' }
    };

    expect(actions.cancelEdit('fakeID')).toMatchSnapshot();
  });

  it('should create an action to delete an account', () => {
    const expectedAction = {
      type: types.DELETE_ACCOUNT,
      payload: { fakeID: 'fakeID' }
    };

    expect(actions.deleteAccount('fakeID')).toMatchSnapshot();
  });

  it('should create an action to handle account changes', () => {
    const expectedAction = {
      type: types.CHANGE_ACCOUNT,
      payload: { fakeID: 'fakeID', target: {
        test: 'test'
      }}
    };

    expect(actions.handleAccountChange('fakeID', { test: 'test' })).toMatchSnapshot();
  });
});
