import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import NavEntry from '../navEntry';


describe('NavEntry', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<NavEntry url="/home">Home</NavEntry>);
    expect(wrapper.find('li').exists()).toEqual(true);
    expect(wrapper.find(Link).exists()).toEqual(true);
  });
});
