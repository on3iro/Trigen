import React from 'react';
import { shallow } from 'enzyme';

import Home from '../index';
import Wrapper from '../Wrapper';
import LoginForm from '../LoginForm';


describe('<HomePage />', () => {
  it('should render Wrapper', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });

  it('should render', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(LoginForm).length).toEqual(1);
  });
});
