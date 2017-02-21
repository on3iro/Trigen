import React from 'react';
import { shallow } from 'enzyme';

import ProfilePage from '../index';
import Wrapper from '../Wrapper';


describe('<ProfilePage />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<ProfilePage />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });
});
