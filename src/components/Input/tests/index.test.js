import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';


describe('<Input />', () => {
  it('should render input', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper.find('input').length).toEqual(1);
  });
});
