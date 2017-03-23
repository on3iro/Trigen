/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React, { PropTypes } from 'react';

import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavLink from './NavLink';


const UserNav = props => {
  return (
    <Wrapper>
      <NavBar>
        {
          props.isLoggedIn
            ? (
              <div>
                <NavLink to="/profile" >
                  Profile
                </NavLink>
                <NavLink to="/accounts">
                  Accounts
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
    </Wrapper>
  );
};

UserNav.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default UserNav;
