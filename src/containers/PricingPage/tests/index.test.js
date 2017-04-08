import React from 'react';
import { shallow } from 'enzyme';

import { PricingPage } from '../index';
import Wrapper from '../Wrapper';


describe('<PricingPage />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<PricingPage />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });
});
