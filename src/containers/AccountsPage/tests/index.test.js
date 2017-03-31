import React from 'react';
import { shallow } from 'enzyme';

import ConnectedAccountsPage, { AccountsPage } from '../index';
import AddAccountButton from '../AddAccountButton';
import BuySlotsButton from '../BuySlotsButton';
import List from '../List';


const accounts = [
  {
    id: 0,
    fakeID: 'fakeID',
    username: 'ttester',
    domain: 'example.com',
  }
];

function setUp(newProps) {
  const props = {
    fetchAccounts: jest.fn(),
    addAccount: jest.fn(),
    accountCount: 1,
    maxAccounts: 2,
    accounts: accounts,
    ...newProps
  };

  const enzymeWrapper = shallow(<AccountsPage {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('<AccountsPage />', () => {
  it('should render <AddAccountButton /> if accountCount < maxAccount slots', () => {
    const { enzymeWrapper } = setUp();
    expect(enzymeWrapper.find(AddAccountButton).length).toBe(1);
  });

  it('should render <BuySlotsButton /> if maxAccount is reached', () => {
    const newAccount = {
      id: 1,
      fakeID: 'fakeID2',
      username: 'dude',
      domain: 'dude.com',
    };
    const { enzymeWrapper } = setUp({ accountCount: 2});
    expect(enzymeWrapper.find(BuySlotsButton).length).toBe(1);
  });

  it('should render <List />', () => {
    const { enzymeWrapper } = setUp();
    expect(enzymeWrapper.find(List).length).toBe(1);
  });

  it('should handle addAccount() onClick on <AddAccountButton />', () => {
    const { enzymeWrapper, props } = setUp();
    const button = enzymeWrapper.find(AddAccountButton).first();
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
