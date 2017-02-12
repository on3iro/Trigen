import React from 'react';
import { shallow } from 'enzyme';

import Home from '../';

describe('Home', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains(<h1>This is Home!</h1>)).toEqual(true);
  });
});
