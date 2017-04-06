import * as types from '../actionTypes';
import * as actions from '../actions';


describe('actions', () => {
  it('should create an action to add an account', () => {
    expect(actions.addAccount('fakeID')).toMatchSnapshot();
  });

  it('should create an action to fetch accounts', () => {
    expect(actions.fetchAccounts('userID', 'tokenXYZ', 'insert function here')).toMatchSnapshot();
  });

  it('should create an action to set account to edit mode', () => {
    expect(actions.editAccount('fakeID', {
      test: 'test',
    })).toMatchSnapshot();
  });

  it('should create an action to save a new account', () => {
    expect(actions.saveNewAccount({ test: 'test' })).toMatchSnapshot();
  });

  it('should create an action to cancel edited changes', () => {
    expect(actions.cancelEdit('fakeID')).toMatchSnapshot();
  });

  it('should create an action to delete an account', () => {
    expect(actions.deleteAccount('uID', 'gibberish', 'aID')).toMatchSnapshot();
  });

  it('should create an action to handle account changes', () => {
    expect(actions.handleAccountChange('fakeID', { test: 'test' })).toMatchSnapshot();
  });
});
