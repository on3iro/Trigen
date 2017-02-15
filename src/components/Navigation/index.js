import React from 'react';

import NavBar from './NavBar';
import NavLink from './NavLink';

const Navigation = () => {
  return (
    <NavBar>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/impressum">
        Impressum
      </NavLink>
    </NavBar>
  );
};

export default Navigation;
