/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React from 'react';

import NavBar from './NavBar';
import NavLink from './NavLink';


const UserNav = () => {
  return (
    <NavBar>
      <NavLink to="/" >
        Login
      </NavLink>
      <NavLink to="/register" >
        Register
      </NavLink>
      <NavLink to="/profile" >
        Profile
      </NavLink>
    </NavBar>
  );
};

export default UserNav;
