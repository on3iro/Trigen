import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';


describe('<Wrapper />', () => {
  it('should render div', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const wrapper = shallow(<Wrapper />);
    expect(wrapper.prop('className')).toBeDefined();
  });
});
