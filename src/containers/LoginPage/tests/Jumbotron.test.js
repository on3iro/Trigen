import React from 'react';
import { mount } from 'enzyme';

import Jumbotron from '../Jumbotron';


describe('<Jumbotron />', () => {
  it('should render <div />', () => {
    const enzymeWrapper = mount(<Jumbotron />);
    expect(enzymeWrapper.find('div').length).toBe(1);
  });

  it('should render <img />', () => {
    const enzymeWrapper = mount(<Jumbotron />);
    expect(enzymeWrapper.find('img').length).toBe(1);
  });
});
