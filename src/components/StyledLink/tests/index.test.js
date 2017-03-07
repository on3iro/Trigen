import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import StyledLink from '../index';


describe('<StyledLink />', () => {
  it('should render <Link />', () => {
    const wrapper = shallow(<StyledLink />);
    expect(wrapper.find(Link).length).toBe(1);
  });
});
