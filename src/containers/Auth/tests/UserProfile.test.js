import React from 'react';
import { shallow } from 'enzyme';

import UserProfile from '../UserProfile';
import Wrapper from '../Wrapper';


describe('<UserProfile />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<UserProfile />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });
});
