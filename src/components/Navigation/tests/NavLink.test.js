import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import NavLink from '../NavLink';


describe('<NavLink />', () => {
  it('Should render react-router Link', () => {
    const wrapper = shallow(<NavLink />);
    expect(wrapper.find(Link).length).toEqual(1);
  });
});
