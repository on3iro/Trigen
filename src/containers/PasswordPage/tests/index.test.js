import React from 'react';
import { shallow } from 'enzyme';

import PasswordPage from '../index';
import Wrapper from '../Wrapper';


describe('<PasswordPage />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<PasswordPage />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });
});
