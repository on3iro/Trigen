import React from 'react';
import { shallow } from 'enzyme';

import ConnectedListItem, {
  ListItem,
  DomainSpan,
  UserNameSpan,
} from '../ListItem';
import Li from 'components/Li';
import Input from '../Input';
import ItemButton from '../ItemButton';


function setUp() {
  const props = {
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
    saveAccount: jest.fn(),
  };

  const enzymeWrapper = shallow(<ListItem {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

function editSetup() {
  const { props } = setUp();

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
  it('should render <Li />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(Li).length).toBe(1);
  });

  it('should render one input type=checkbox in normal mode', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(Input).length).toBe(1);
  });

  it('should render one <DomainSpan /> in normal mode', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(DomainSpan).length).toBe(1);
  });

  it('should render one <UserNameSpan /> in normal mode', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(UserNameSpan).length).toBe(1);
  });

  it('should render edit <ItemButton />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(ItemButton).findWhere(b => b.text() === 'Edit').length).toBe(1);
  });

  it('should render Delete <ItemButton />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(ItemButton).findWhere(b => b.text() === 'Delete').length).toBe(1);
  });

  it('should render three <Input /> in edit mode', () => {
    const { enzymeWrapper } = editSetup();
    expect(enzymeWrapper.find(Input).length).toBe(3);
  });

  it('should call editItem', () => {
    const { enzymeWrapper, props } = setUp();
    const editButton = enzymeWrapper.find(ItemButton).findWhere(n => n.props().children === 'Edit').first();
    editButton.simulate('click');

    expect(props.editAccount.mock.calls.length).toBe(1);
  });

  it('should call deleteItem', () => {
    const { enzymeWrapper, props } = setUp();
    const deleteButton = enzymeWrapper.find(ItemButton).findWhere(n => n.props().children === 'Delete').first();
    deleteButton.simulate('click');

    expect(props.deleteAccount.mock.calls.length).toBe(1);
  });

  it('should call saveItem', () => {
    const { enzymeWrapper, props } = editSetup();
    const saveButton = enzymeWrapper.find(ItemButton).findWhere(n => n.props().children === 'Save').first();

    saveButton.simulate('click');

    expect(props.saveAccount.mock.calls.length).toBe(1);
  });

  it('should call cancelEdit', () => {
    const { enzymeWrapper, props } = editSetup();
    const saveButton = enzymeWrapper.find(ItemButton).findWhere(n => n.props().children === 'Cancel').first();

    saveButton.simulate('click');

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
