import React from 'react';
import { mount } from 'enzyme';

import Input from '../index';


describe('<Input />', () => {
  it('should render input', () => {
    const wrapper = mount(<Input />);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
