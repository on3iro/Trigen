import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import Entry from '../Entry';


describe('Entry', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<Entry url="/home">Home</Entry>);
    expect(wrapper.find('li').exists()).toEqual(true);
    expect(wrapper.find(Link).exists()).toEqual(true);
  });
});
