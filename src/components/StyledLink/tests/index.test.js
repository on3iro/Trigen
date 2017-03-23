import React from 'react';
import { shallow } from 'enzyme';

import StyledLink, { LinkWrapper } from '../index';


describe('<StyledLink />', () => {
  it('should render <LinkWrapper />', () => {
    const wrapper = shallow(<StyledLink to="/" />);
    expect(wrapper.find(LinkWrapper).length).toMatchSnapshot();
  });
});
