import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';
import RegisterForm from '../RegisterForm';
import RegisterPage from '../index';


describe('<RegisterPage />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });

  it('should render <RegisterForm />', () => {
    const wrapper = shallow(<RegisterPage />);
    expect(wrapper.find(RegisterForm).length).toEqual(1);
  });
});
