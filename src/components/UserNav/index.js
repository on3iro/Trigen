/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavLink from 'components/NavLink';


const UserNav = props => {
  return (
    <Wrapper>
      {
        props.isLoggedIn
          ? (
            <NavBar>
              <NavLink to="/profile" >
                Profile
              </NavLink>
              <NavLink to="/accounts">
                Accounts
              </NavLink>
              <NavLink to="/logout" >
                Logout
              </NavLink>
            </NavBar>
          ) : (
            <NavBar>
              <NavLink to="/login" >
                Login
              </NavLink>
            </NavBar>
          )
      }
    </Wrapper>
  );
};

UserNav.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default UserNav;
