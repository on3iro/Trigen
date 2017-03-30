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
import profileIconHover from 'img/icons/Icon_Button_Userprofile_Hover.png';
import settingsIcon from 'img/icons/Icon_Button_Settings.png';
import settingsIconHover from 'img/icons/Icon_Button_Settings_Hover.png';
import logoutIcon from 'img/icons/Icon_Button_Logout.png';
import logoutIconHover from 'img/icons/Icon_Button_Logout_Hover.png';


const UserNavLink = styled(NavLink)`
  .profile {
    background-image: url(${props => props.icon});
  }

  &:hover .profile {
    background-image: url(${props => props.iconHover})
  }

  .accounts {
    background-image: url(${props => props.icon});
  }

  &:hover .accounts {
    background-image: url(${props => props.iconHover})
  }

  .logout {
    background-image: url(${props => props.icon});
  }

  &:hover .logout {
    background-image: url(${props => props.iconHover})
  }
`;

const Icon = styled.div`
  padding-bottom: 10px;
`;
const ProfileIcon = styled(Icon)`
  width: 24px;
  height: 27px;
  background-size: 24px 27px;
`;
const AccountsIcon = styled(Icon)`
  width: 26px;
  height: 26px;
  background-size: 26px 26px;
`;
const LogoutIcon = styled(Icon)`
  width: 20px;
  height: 25px;
  background-size: 20px 25px;
`;

const icProfile = require('img/icons/Icon_Button_Userprofile.png');

const UserNav = props => {
  return (
    <Grid lg={3 / 3}>
      {
        props.isLoggedIn
          ? (
            <NavBar>
              <Grid lg={1 / 3}>
                <UserNavLink to="/profile" icon={profileIcon} iconHover={profileIconHover} >
                  <ProfileIcon className="profile" />
                </UserNavLink>
              </Grid>
              <Grid lg={1 / 3}>
                <UserNavLink to="/accounts" icon={settingsIcon} iconHover={settingsIconHover}>
                  <AccountsIcon className="accounts" />
                </UserNavLink>
              </Grid>
              <Grid lg={1 / 3}>
                <UserNavLink to="/logout" icon={logoutIcon} iconHover={logoutIconHover}>
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
