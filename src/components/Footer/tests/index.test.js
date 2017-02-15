import React from 'react';
import { Link } from 'react-router';
import { shallow } from 'enzyme';

import Footer from '../index';
import Wrapper from '../Wrapper';


describe('<Footer />', () => {
  it('Should render <Wrapper />', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });

  it('Should render react-router Link', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(Link).exists()).toEqual(true);
  });
});
