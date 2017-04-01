import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/Button';

import UserNav from '../index';
import UserNavLink from '../UserNavLink';
import NavBar from '../NavBar';


describe('<UserNav />', () => {
  it('should render <NavBar/>', () => {
    const wrapper = shallow(<UserNav />);
    expect(wrapper.find(NavBar).length).toBe(1);
  });

  it('should render <Button /> components when not logged in', () => {
    const enzymeWrapper = shallow(<UserNav isLoggedIn={false} />);
    expect(enzymeWrapper.find(Button).exists()).toBe(true);
    expect(enzymeWrapper.find(UserNavLink).exists()).toBe(false);
  });

  it('should render accounts control navlinks when logged in', () => {
    const enzymeWrapper = shallow(<UserNav isLoggedIn={true} />);
    expect(enzymeWrapper.find(Button).exists()).toBe(false);
    expect(enzymeWrapper.find(UserNavLink).exists()).toBe(true);
  })

  it('should render /register <Button> when on /login router', () => {
    const enzymeWrapper = shallow(<UserNav isLoggedIn={false} routerLocation={{ pathname: '/login'}}  />);
    expect(enzymeWrapper.find(Button).findWhere(n => n.props().to === "/register").exists()).toBe(true);
  });

  it('should render /login <Button> when on /register router', () => {
    const enzymeWrapper = shallow(<UserNav isLoggedIn={false} routerLocation={{ pathname: '/register'}}  />);
    expect(enzymeWrapper.find(Button).findWhere(n => n.props().to === "/login").exists()).toBe(true);
  });
});
