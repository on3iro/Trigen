import React from 'react';
import { shallow } from 'enzyme';

import ConnectedAccountsPage, { AccountsPage } from '../index';
import Wrapper from '../Wrapper';
import Button from '../Button';
import List from '../List';


function setUp() {
  const props = {
    fetchAccounts: jest.fn(),
    addAccount: jest.fn(),
    accounts: [
      {
        id: 0,
        fakeID: 'fakeID',
        username: 'ttester',
        domain: 'example.com',
      }
    ]
  };

  const enzymeWrapper = shallow(<AccountsPage {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('<AccountsPage />', () => {
  it('should render <Wrapper />', () => {
    const { enzymeWrapper } = setUp();
    expect(enzymeWrapper.find(Wrapper).length).toBe(1);
  });

  it('should render <Button />', () => {
    const { enzymeWrapper } = setUp();
    expect(enzymeWrapper.find(Button).length).toBe(1);
  });

  it('should render <List />', () => {
    const { enzymeWrapper } = setUp();
    expect(enzymeWrapper.find(List).length).toBe(1);
  });

  it('should handle addAccount() onClick on <Button />', () => {
    const { enzymeWrapper, props } = setUp();
    const button = enzymeWrapper.find(Button).first();
    button.props().onClick();

    expect(props.addAccount.mock.calls.length).toBe(1);
  });

  it('should handle fetchAccounts() on componentDidMount lifecycle method', () => {
    const props = {
      fetchAccounts: jest.fn(),
    };
    const enzymeWrapper = shallow(<AccountsPage {...props} />);
    enzymeWrapper.instance().componentDidMount();
    expect(props.fetchAccounts.mock.calls.length).toBe(1);
  });
});
