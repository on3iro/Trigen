import  React from 'react';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Wrapper from './Wrapper';


export const Header = () => {
  return (
    <Wrapper>
      <A href="#">
        Logo
      </A>
      <NavBar>
        <HeaderLink to="/">
          Home
        </HeaderLink>
        <HeaderLink to="/impressum">
          Impressum
        </HeaderLink>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
