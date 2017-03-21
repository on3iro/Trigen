/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React, { PropTypes } from 'react';

import NavBar from './NavBar';
import NavLink from './NavLink';


const UserNav = props => {
  return (
    <NavBar>
      {
        props.isLoggedIn
          ? (
            <div>
              <NavLink to="/profile" >
                Profile
              </NavLink>
              <NavLink to="/logout" >
                Logout
              </NavLink>
            </div>
          ) : (
            <div>
              <NavLink to="/login" >
                Login
              </NavLink>
              <NavLink to="/register" >
                Register
              </NavLink>
            </div>
          )
      }
    </NavBar>
  );
};

UserNav.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default UserNav;
