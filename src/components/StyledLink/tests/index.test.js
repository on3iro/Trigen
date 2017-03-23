import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import StyledLink from '../index';


describe('<StyledLink />', () => {
  it('should render <Link />', () => {
    const wrapper = shallow(<StyledLink to="/" />);
    expect(wrapper.find(Link).length).toBe(1);
  });
});
