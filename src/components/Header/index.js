/**
  * Renders a Header with a Logo and a navigation
  *
  * @namespace Header
  */

import  React from 'react';

import Navigation from 'components/Navigation';
import UserNav from 'components/UserNav';
import A from './A';
import Img from './Img';
import Wrapper from './Wrapper';


export const Header = props => {
  return (
    <Wrapper>
      <A href="#">
        <Img src={require('../../img/Trigen_Logo.png')} />
      </A>
      <Navigation />
      <UserNav {...props} />
    </Wrapper>
  );
};

export default Header;
