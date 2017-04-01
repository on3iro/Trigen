import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import Grid from 'grid-styled';

import LoginPage from '../index';
import Wrapper from '../Wrapper';
import Jumbotron from '../Jumbotron';
import IntroText from '../IntroText';
import Divider from '../Divider';


describe('<LoginPage />', () => {
  it('should render <Wrapper />', () => {
    const enzymeWrapper = shallow(<LoginPage />);
    expect(enzymeWrapper.find(Wrapper).exists()).toBe(true);
  });

  it('should render <Grid />', () => {
    const enzymeWrapper = shallow(<LoginPage />);
    expect(enzymeWrapper.find(Grid).exists()).toBe(true);
  });

  it('should render <Jumbotron />', () => {
    const enzymeWrapper = shallow(<LoginPage />);
    expect(enzymeWrapper.find(Jumbotron).exists()).toBe(true);
  });

  it('should render <IntroText />', () => {
    const enzymeWrapper = shallow(<LoginPage />);
    expect(enzymeWrapper.find(IntroText).exists()).toBe(true);
  });

  it('should render <Divider />', () => {
    const enzymeWrapper = shallow(<LoginPage />);
    expect(enzymeWrapper.find(Divider).exists()).toBe(true);
  });

  it('should render <Route /> to /login', () => {
    const enzymeWrapper = shallow(
      <LoginPage />
    );
    const route = enzymeWrapper.find(Route).findWhere( el => el.props().path === '/login');
    expect(route.exists()).toBe(true);
  });

  it('should render <Route /> to /register', () => {
    const enzymeWrapper = shallow(
      <LoginPage />
    );
    const route = enzymeWrapper.find(Route).findWhere( el => el.props().path === '/register');
    expect(route.exists()).toBe(true);
  });
});
