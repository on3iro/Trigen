import React from 'react';
import { shallow } from 'enzyme';

import LoadingSpinner from 'components/LoadingSpinner';
import Input from 'components/Input';
import Button from 'components/Button';

import { PassGenForm, mapStateToProps, mapDispatchToProps } from '../PassGenForm';


const baseProps = {
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
    userID: 1,
};

const setUp = newProps => {
  const props = {
    ...baseProps,
    fetchAccounts: jest.fn(),
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

  describe('getSuggestionValue()', () => {
    it('should return suggestion value', () => {
      const { enzymeWrapper } = setUp();

      expect(enzymeWrapper.instance().getSuggestionValue({ username: 'don', domain: 'brrzz@brozz.net' }))
      .toBe('brrzz@brozz.net');
    });
  });

  describe('onDomainChange()', () => {
    it('should handle domain change', () => {
      const { enzymeWrapper } = setUp();

      enzymeWrapper.instance().onDomainChange({}, { newValue: 'test@test.net' });
      expect(enzymeWrapper.state()).toMatchSnapshot();
    });
  });

  describe('onSuggestionsFetchRequested()', () => {
    it('should handle suggestion fetching', () => {
      const { enzymeWrapper } = setUp();

      enzymeWrapper.instance().onSuggestionsFetchRequested({ value: 'test' });
      expect(enzymeWrapper.state()).toMatchSnapshot();
    });
  });

  describe('onSuggestionsClearRequested()', () => {
    it('should clear suggestions in component state', () => {
      const { enzymeWrapper } = setUp();

      enzymeWrapper.setState({suggestions: [{domain: 'hi'}]});

      expect(enzymeWrapper.state().suggestions).toEqual([{ domain: 'hi' }]);

      enzymeWrapper.instance().onSuggestionsClearRequested();

      expect(enzymeWrapper.state().suggestions).toEqual([])

    });
  });

  describe('onSuggestionSelected()', () => {
    it('should populate username with suggestion value', () => {
      const { enzymeWrapper } = setUp();

      enzymeWrapper.instance().onSuggestionSelected({}, { suggestion: { domain: 'cthulhu@was.here', username: 'fthang'}});

      expect(enzymeWrapper.state().username).toBe('fthang');
    });
  });

  describe('renderSuggestion()', () => {
    it('should return domain and username', () => {
      const { enzymeWrapper } = setUp();

      expect(enzymeWrapper.instance().renderSuggestion({ domain: 'howdy@bam.de', username: 'lucky luke'}))
        .toMatchSnapshot();
    });
  });

  describe('onUsernameChange()', () => {
    it('should update username inside component state', () => {
      const { enzymeWrapper } = setUp();

      enzymeWrapper.instance().onUsernameChange({ target: { value: 'the devil'} });

      expect(enzymeWrapper.state().username).toBe('the devil');
    });
  });

  describe('clearUsername()', () => {
    it('should empty username inside component state', () => {
      const { enzymeWrapper } = setUp();

      enzymeWrapper.setState({ username: 'princess bubblegum' });

      expect(enzymeWrapper.state().username).toBe('princess bubblegum');

      enzymeWrapper.instance().clearUsername();

      expect(enzymeWrapper.state().username).toBe('');
    });
  });

  it('should render <LoadingSpinner /> on accountList loading', () => {
    const { enzymeWrapper } = setUp({ accountListStatus: {
      ...baseProps.accountListStatus, isLoading: true
    }});

    expect(enzymeWrapper.find(LoadingSpinner).exists()).toBe(true);
  });

  it('should render <form>', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find('form').exists()).toBe(true);
  })

  it('should render <Input/>', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(Input).length).toBe(3)
  });

  it('should render <Button/>', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(Button).exists()).toBe(true);
  });

  describe('react-redux', () => {
    it('should map state to props', () => {
      expect(mapStateToProps({
        accounts: {
          Accounts: [{ domain: 'hi.com', username: 'jonny' }],
          AccountListStatus: {
            isLoading: true
          },
        },
        auth: {
          user: {
            data: {
              id: '123',
            },
            token: 'abc',
          }
        },
        PasswordReducer: {
          Password: '',
          inProgress: false,
        },
      })).toMatchSnapshot();
    });

    it('should map dispatch to props', () => {
      expect(mapDispatchToProps()).toMatchSnapshot();
    });
  });
});
