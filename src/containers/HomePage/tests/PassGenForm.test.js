import React from 'react';
import { shallow } from 'enzyme';

import { PassGenForm } from '../PassGenForm';


const setUp = newProps => {
  const props = {
    accountListStatus: {
      isLoading: false,
      fetched: false,
      errored: false,
    },
    accounts: [
      {
        id: 1,
        fakeID: 'asdfas',
        username: 'tester',
        domain: 'testDomain.net',
      }
    ],
    authToken: 'asdf',
    fetchAccounts: jest.fn(),
    userID: 1,
    ...newProps,
  };

  const enzymeWrapper = shallow(<PassGenForm {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe('<PassGenForm />', () => {
  it('should have initial component state', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.state()).toMatchSnapshot();
  });

  it('should call fechtAccounts() if !fetched inside componentDidMount', () => {
    const { enzymeWrapper, props } = setUp();

    enzymeWrapper.instance().componentDidMount();
    expect(props.fetchAccounts).toHaveBeenCalledTimes(1);
  });

  it('should not call fetchAccounts() if already fetched', () => {
    const { enzymeWrapper, props } = setUp({accountListStatus: { fetched: true }});

    enzymeWrapper.instance().componentDidMount();
    expect(props.fetchAccounts).toHaveBeenCalledTimes(0);
  });

  describe('validate()', () => {
    it('should return errors for empyt domain and empty username', () => {
      const { enzymeWrapper } = setUp();

      enzymeWrapper.setState({ domain: '', username: ''});
      expect(enzymeWrapper.instance().validate()).toMatchSnapshot();
    });

    it('should return an empty error if there are no errors', () => {
      const { enzymeWrapper } = setUp();

      enzymeWrapper.setState({ domain: 'test@test.com', username: 'tester' });
      expect(enzymeWrapper.instance().validate()).toMatchSnapshot();
    })
  });

  describe('getSuggestions()', () => {
    it('should return array with suggestions on match', () => {
      const { enzymeWrapper } = setUp();

      expect(enzymeWrapper.instance().getSuggestions('test')).toMatchSnapshot();
    });

    it('should return empty array on no match', () => {
      const { enzymeWrapper } = setUp();

      expect(enzymeWrapper.instance().getSuggestions('uuu')).toEqual([]);
    });
  });
});
