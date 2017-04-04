import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../index';
import Wrapper from '../Wrapper';


describe('<HomePage />', () => {
  it('should render Wrapper', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });
});
