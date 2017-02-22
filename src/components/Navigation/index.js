/**
  * Renders a Navigation with react-router Links
  *
  * @namespace Navigation
  */

import React from 'react';

import NavBar from './NavBar';
import NavLink from './NavLink';

const Navigation = () => {
  return (
    <NavBar>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/pricing">
        Pricing
      </NavLink>
      <NavLink to="/password">
        GenPW
      </NavLink>
      <NavLink to="/accounts">
        My Accounts
      </NavLink>
      <NavLink to="/faq">
        FAQ
      </NavLink>
    </NavBar>
  );
};

export default Navigation;
