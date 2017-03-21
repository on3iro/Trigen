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
    </NavBar>
  );
};

export default Navigation;
