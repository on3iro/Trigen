/**
  * Renders a Navigation with react-router Links
  *
  * @namespace Navigation
  */

import React from 'react';

import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavLink from 'components/NavLink';

const Navigation = () => {
  return (
    <Wrapper>
      <NavBar>
        <NavLink exact to="/">
          Startseite
        </NavLink>
        <NavLink to="/pricing">
          Preise
        </NavLink>
        <NavLink to="/faq">
          FAQ
        </NavLink>
      </NavBar>
    </Wrapper>
  );
};

export default Navigation;
