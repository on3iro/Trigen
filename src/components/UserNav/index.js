/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import NavLink from 'components/NavLink';

import Wrapper from './Wrapper';
import NavBar from './NavBar';

import profileIcon from 'file-loader?img/icons/Icon_Button_Userprofile.png';
import profileIconHover from 'file-loader?img/icons/Icon_Button_Userprofile_Hover.png';
import settingsIcon from 'file-loader?img/icons/Icon_Button_Settings.png';
import settingsIconHover from 'file-loader?img/icons/Icon_Button_Settings_Hover.png';
import logoutIcon from 'file-loader?img/icons/Icon_Button_Logout.png';
import logoutIconHover from 'file-loader?img/icons/Icon_Button_Logout_Hover.png';


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
  height: 24px;
  background-size: 24px 24px;
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
    <Wrapper>
      {
        props.isLoggedIn
          ? (
            <NavBar>
              <UserNavLink to="/profile" icon={profileIcon} iconHover={profileIconHover} >
                <ProfileIcon className="profile" />
              </UserNavLink>
              <UserNavLink to="/accounts" icon={settingsIcon} iconHover={settingsIconHover}>
                <AccountsIcon className="accounts" />
              </UserNavLink>
              <UserNavLink to="/logout" icon={logoutIcon} iconHover={logoutIconHover}>
                <LogoutIcon className="logout" />
              </UserNavLink>
            </NavBar>
          ) : (
            <NavBar>
              <NavLink to="/login" >
                Anmelden
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
