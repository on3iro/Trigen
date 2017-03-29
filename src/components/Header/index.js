/**
  * Renders a Header with a Logo and a navigation
  *
  * @namespace Header
  */

import  React from 'react';

import Navigation from 'components/Navigation';
import UserNav from 'components/UserNav';
import Logo from './Logo';
import Img from './Img';
import Wrapper from './Wrapper';


export const Header = props => {
  return (
    <Wrapper>
      <Logo to="/">
        <Img src={require('img/Trigen_Logo.png')} alt="trigen logo" />
      </Logo>
      <Navigation />
      <UserNav {...props} />
    </Wrapper>
  );
};

export default Header;
