import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';


describe('<Wrapper />', () => {
  it('should render section', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.type()).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.prop('className')).toBeDefined();
  });
});
