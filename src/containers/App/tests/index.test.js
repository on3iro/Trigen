import React from 'react';
import { shallow } from 'enzyme';

import App from '../index';
import Content from '../Content';
import Wrapper from '../Wrapper';
import Header from 'components/Header';
import Footer from 'components/Footer';


describe('App', () => {
  it('Should render Wrapper', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Wrapper).exists()).toEqual(true);
  });

  it('Should render a <Header />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header).length).toEqual(1);
  });

  it('Should render a <Footer />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer).length).toEqual(1);
  });
});
