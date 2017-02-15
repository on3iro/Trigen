import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import Header from 'components/Header';


describe('App', () => {
  it('Should render <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').exists()).toEqual(true);
  });

  it('Should render a <Header />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
  });
});
