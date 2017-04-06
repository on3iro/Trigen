import React from 'react';
import { shallow } from 'enzyme';

import ConnectedListItem, {
  ListItem,
  RestyledLi,
  Span,
} from '../ListItem';
import Input from '../Input';
import ItemButton from '../ItemButton';


const baseProps = {
  account: {
    id: 0,
    fakeID: 'fakeID',
    username: 'ttester',
    domain: 'example.com',
    edit: false,
  },
  fakeID: 'fakeID',
  cancelEdit: jest.fn(),
  deleteAccount: jest.fn(),
  editAccount: jest.fn(),
  handleAccountChange: jest.fn(),
  saveNewAccount: jest.fn(),
  updateAccount: jest.fn(),
};

function setUp(newProps) {
  const props = {
    ...baseProps,
    ...newProps,
  };
  const enzymeWrapper = shallow(<ListItem {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

function editSetup(newProps) {
  const { props } = setUp(newProps);

  const editProps = {
    ...props,
    account: {
      ...props.account,
      edit: true,
    },
    EditedAccount: { ...props.account, edit: true }
  };

  const enzymeWrapper = shallow(<ListItem {...editProps} />);

  return {
    props: editProps,
    enzymeWrapper
  };
}

describe('<ListItem />', () => {
  it('should render <RestyledLi />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(RestyledLi).length).toBe(1);
  });

  it('should render <Span /> in normal mode', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(Span).length).toBe(2);
  });

  it('should render <Input /> components in edit mode', () => {
    const { enzymeWrapper } = editSetup();
    expect(enzymeWrapper.find(Input).length).toMatchSnapshot();
  });

  it('should call editItem', () => {
    const { enzymeWrapper, props } = setUp();

    enzymeWrapper.instance().editItem();
    expect(props.editAccount.mock.calls.length).toBe(1);
  });

  it('should call saveItem and update existing account', () => {
    const { enzymeWrapper, props } = editSetup();

    enzymeWrapper.instance().saveItem();
    expect(props.updateAccount.mock.calls.length).toBe(1);
  });

  it('should call saveItem and save new account', () => {
    const { enzymeWrapper, props } = editSetup({
      account: {
        id: 0,
        fakeID: 'fakeID',
        username: 'ttester',
        domain: 'example.com',
        edit: false,
        new: true,
      },
    });

    enzymeWrapper.instance().saveItem();
    expect(props.saveNewAccount.mock.calls.length).toBe(1);
  });

  it('should call cancelEdit', () => {
    const { enzymeWrapper, props } = editSetup();

    enzymeWrapper.instance().cancelEdit();
    expect(props.cancelEdit.mock.calls.length).toBe(1);
  });

  it('should call handleChange on input change', () => {
    const { enzymeWrapper, props } = editSetup();
    const DomainInput = enzymeWrapper.find(Input).findWhere(n => n.props().name === 'domain').first();

    DomainInput.simulate('change', { target: {
      value: 'test',
      name: 'domain'
    }});

    expect(props.handleAccountChange.mock.calls.length).toBe(1);
    expect(props.handleAccountChange).toHaveBeenCalledWith('fakeID', {
      value: 'test',
      name: 'domain'
    });
  })
});
