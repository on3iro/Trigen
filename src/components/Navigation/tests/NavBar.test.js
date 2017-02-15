import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '../NavBar';


describe('<NavBar', () => {
  it('Should render div', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
