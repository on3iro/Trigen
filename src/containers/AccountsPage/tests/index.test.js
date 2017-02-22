import React from 'react';
import { shallow } from 'enzyme';

import AccountsPage from '../index';
import Wrapper from '../Wrapper';


describe('<AccountsPage />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<AccountsPage />);
    expect(wrapper.find(Wrapper).length).toEqual(1);
  });
});
