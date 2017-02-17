import React from 'react';
import { mount } from 'enzyme';
import { Link } from 'react-router';

import NavLink from '../NavLink';


describe('<NavLink />', () => {
  it('Should render react-router li', () => {
    const wrapper = mount(<NavLink to='/' >Home</NavLink>);
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('Should render react-router Link', () => {
    const wrapper = mount(<NavLink to='/' >Home</NavLink>);
    expect(wrapper.find(Link).length).toEqual(1);
  });
});
