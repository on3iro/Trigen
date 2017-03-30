import  React from 'react';
import { shallow } from 'enzyme';

import AccountControls from '../AccountControls';
import ItemButton from '../ItemButton';


function setUp(newProps) {
  const props = {
    save: jest.fn(),
    cancel: jest.fn(),
    editItem: jest.fn(),
    delete: jest.fn(),
    edit: false,
    ...newProps
  }

  const enzymeWrapper = shallow(<AccountControls {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<AccountControls', () => {
  it('should render edit <ItemButton />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(ItemButton).findWhere(b => b.props().className === 'edit').length).toMatchSnapshot();
  });

  it('should render Delete <ItemButton />', () => {
    const { enzymeWrapper } = setUp();

    expect(enzymeWrapper.find(ItemButton).findWhere(b => b.props().className === 'delete').length).toMatchSnapshot();
  });
});
