import React from 'react';
import { shallow } from 'enzyme';

import AGBPage from '../index';
import Wrapper from '../Wrapper';


describe('<AGBPage />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<AGBPage />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });
});
