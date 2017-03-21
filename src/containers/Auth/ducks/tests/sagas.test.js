import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import moxios from 'moxios';

import * as sagas from '../sagas';
import * as types from '../actionTypes';


describe('handleAuthSaga', () => {
  const handleAuthSaga = sagas.handleAuth();

  it('should start task to watch LOGIN_SUBMIT', () => {
    const takeLatestDescriptor = handleAuthSaga.next().value;
    const expectedYield = takeLatest(types.LOGIN_SUBMIT, sagas.authorize);
    expect(takeLatestDescriptor).toMatchSnapshot();
  });

  it('should start taks to watch REGISTER_SUBMIT', () => {
    const takeLatestDescriptor = handleAuthSaga.next().value;
    const expectedYield = takeLatest(types.REGISTER_SUBMIT, sagas.register);
    expect(takeLatestDescriptor).toMatchSnapshot();
  });
});

describe('login', () => {
  describe('authorize generator', () => {
    const action = { type: types.LOGIN_SUBMIT, payload: {
      test: 'test',
    }};
    const authorizeGenerator = sagas.authorize(action);

    it('should call requestLogin with action.payload', () => {
      const callDescriptor = authorizeGenerator.next().value;
      const expectedYield = call(sagas.requestLogin, { test: 'test' });
      expect(callDescriptor).toMatchSnapshot();
    });
  });

  describe('requestLogin generator', () => {
    const data = { test: 'test' };
    let requestLoginGenerator;

    beforeEach(() => {
      requestLoginGenerator = sagas.requestLogin(data);
    });

    it('should call axios.post', () => {
      const callDescriptor = requestLoginGenerator.next().value;
      const expectedYield = call(axios.post, 'http://localhost:3030/api/auth/login', data, { headers: {'Content-Type': 'application/json'}});
      expect(callDescriptor).toMatchSnapshot();
    });

    it('should put LOGIN_SUCCESS action with payload', () => {
      const response = {
        data: {
          id: 1,
          email: 'foo@bar.com',
          name: 'foo',
          token: 'abc123',
        }
      };
      requestLoginGenerator.next().value;
      const putDescriptor = requestLoginGenerator.next(response).value;
      const expectedYield = put({ type: types.LOGIN_SUCCESS, payload: {
        id: 1,
        email: 'foo@bar.com',
        name: 'foo',
        token: 'abc123',
      }});
      expect(putDescriptor).toMatchSnapshot();
    });

    it('should put LOGIN_ERROR action', () => {
      const response = new Error('Some error');
      requestLoginGenerator.next().value;
      const putDescriptor = requestLoginGenerator.throw(response).value;
      const expectedYield = put({ type: types.LOGIN_ERROR, payload: 'Some error'  });
      expect(putDescriptor).toMatchSnapshot();
    });
  });
});

describe('register', () => {
  describe('register generator', () => {
    const action = { type: types.REGISTER_SUBMIT, payload: {
      test: 'test',
    }};
    const registerGenerator = sagas.register(action);

    it('should call requestRegister with action payload', () => {
      const callDescriptor = registerGenerator.next().value;
      const expectedYield = call(sagas.requestRegister, { test: 'test' });
      expect(callDescriptor).toEqual(expectedYield);
    });
  });

  describe('requestRegister generator', () => {
    const data = { test: 'test' };
    let requestRegisterGenerator;

    beforeEach(() => {
      requestRegisterGenerator = sagas.requestRegister(data);
    });

    it('should call axios.post', () => {
      const callDescriptor = requestRegisterGenerator.next().value;
      const expectedYield = call(axios.post, 'http://localhost:3030/api/auth/register', data, { headers: {'Content-Type': 'application/json'}});
      expect(callDescriptor).toMatchSnapshot();
    });

    it('should put REGISTER_SUCCESS action with payload', () => {
      const response = {
        data: {
          id: 1,
          email: 'foo@bar.com',
          name: 'foo',
          token: 'abc123',
        }
      };
      requestRegisterGenerator.next().value;
      const putDescriptor = requestRegisterGenerator.next(response).value;
      const expectedYield = put({ type: types.REGISTER_SUCCESS, payload: {
        id: 1,
        email: 'foo@bar.com',
        name: 'foo',
        token: 'abc123',
      }});
      expect(putDescriptor).toMatchSnapshot();
    });

    it('should put REGISTER_ERROR action', () => {
      const response = new Error('Some error');
      requestRegisterGenerator.next().value;
      const putDescriptor = requestRegisterGenerator.throw(response).value;
      const expectedYield = put({ type: types.REGISTER_ERROR, payload: 'Some error'  });
      expect(putDescriptor).toMatchSnapshot();
    });
  });
});
