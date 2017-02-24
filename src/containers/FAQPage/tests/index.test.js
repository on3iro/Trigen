import React from 'react';
import { shallow } from 'enzyme';

import FAQPage from '../index';
import Wrapper from '../Wrapper';


describe('<FAQPage />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<FAQPage />);
    expect(wrapper.find(Wrapper).length).toBe(1);
  });
});
