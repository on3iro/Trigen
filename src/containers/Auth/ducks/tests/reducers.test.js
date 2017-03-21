import authReducer from '../reducers';
import * as types from '../actionTypes';


describe('authReducer', () => {
  it('should return initial state', () => {
    expect(authReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(authReducer(undefined, {
      type: types.LOGIN_SUCCESS,
      payload: {
        token: 'testtoken',
        user: 'testuser',
      }
    })).toMatchSnapshot();
  });

  it('should handle REGISTER_ERROR', () => {
    expect(authReducer(undefined, {
      type: types.REGISTER_ERROR,
      payload: 'register-error',
    })).toMatchSnapshot();
  });

  it('should handle LOGIN_ERROR', () => {
    expect(authReducer(undefined, {
      type: types.LOGIN_ERROR,
      payload: 'login-error',
    })).toMatchSnapshot();
  });

  it('should handle LOGOUT', () => {
    expect(authReducer({
      user: {
        isLoggedIn: true,
        token: 'testoken',
      },
    }, {
      type: types.LOGOUT,
    })).toMatchSnapshot();
  });
});
