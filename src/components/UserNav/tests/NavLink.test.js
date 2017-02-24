import React from 'react';
import { mount, shallow } from 'enzyme';
import { Link } from 'react-router';

import NavLink from '../NavLink';
import { Li, StyledLink } from '../NavLink';


describe('<NavLink />', () => {
  it('Should render react-router li', () => {
    const wrapper = mount(<NavLink to='/' >Home</NavLink>);
    expect(wrapper.find('li').length).toBe(1);
  });

  it('Should render react-router Link', () => {
    const wrapper = mount(<NavLink to='/' >Home</NavLink>);
    expect(wrapper.find(Link).length).toBe(1);
  });

  it('should render styled.li', () => {
    const wrapper = shallow(<NavLink to='/'>Home</NavLink>);
    expect(wrapper.find(Li).length).toBe(1);
  });

  it('should rende styled(Link)', () => {
    const wrapper = shallow(<NavLink to="/">Home</NavLink>);
    expect(wrapper.find(StyledLink).length).toBe(1);
  });
});
