import React from 'react';
import { shallow } from 'enzyme';

import PasswordGenerator  from '../index';
import Wrapper from '../Wrapper';


describe('<PasswordGenerator />', () => {
  it('should render Wrapper', () => {
    const wrapper = shallow(<PasswordGenerator />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });
});
