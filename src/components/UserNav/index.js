/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Grid from 'grid-styled';

import NavLink from 'components/NavLink';

import NavBar from './NavBar';

import profileIcon from 'img/icons/Icon_Button_Userprofile.png';
import settingsIcon from 'img/icons/Icon_Button_Settings.png';
import logoutIcon from 'img/icons/Icon_Button_Logout.png';


const UserNavLink = styled(NavLink)`
  .profile {
    background-image: url(${props => props.icon});
    background-position: 0px;
  }

  &:hover .profile,
  &.active .profile {
    background-position: -25px;
  }

  .accounts {
    background-image: url(${props => props.icon});
  }

  &:hover .accounts,
  &.active .accounts {
    background-position: -25px;
  }

  .logout {
    background-image: url(${props => props.icon});
  }

  &:hover .logout,
  &.active .logout {
    background-position: -20px;
  }
`;

const Icon = styled.div`
  padding-bottom: 10px;
`;
const ProfileIcon = styled(Icon)`
  width: 25px;
  height: 27px;
  background-size: 50px 27px;
`;
const AccountsIcon = styled(Icon)`
  width: 25px;
  height: 26px;
  background-size: 50px 26px;
`;
const LogoutIcon = styled(Icon)`
  width: 20px;
  height: 25px;
  background-size: 40px 25px;
`;

const UserNav = props => {
  return (
    <Grid lg={3 / 3}>
      {
        props.isLoggedIn
          ? (
            <NavBar>
              <Grid lg={1 / 3}>
                <UserNavLink to="/profile" icon={profileIcon} >
                  <ProfileIcon className="profile" />
                </UserNavLink>
              </Grid>
              <Grid lg={1 / 3}>
                <UserNavLink to="/accounts" icon={settingsIcon} >
                  <AccountsIcon className="accounts" />
                </UserNavLink>
              </Grid>
              <Grid lg={1 / 3}>
                <UserNavLink to="/logout" icon={logoutIcon} >
                  <LogoutIcon className="logout" />
                </UserNavLink>
              </Grid>
            </NavBar>
          ) : (
              <NavBar>
                <Grid lg={3 / 3}>
                  <NavLink to="/login" >
                    Anmelden
                  </NavLink>
                </Grid>
              </NavBar>
          )
      }
    </Grid>
  );
};

UserNav.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default UserNav;
