/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import NavLink from 'components/NavLink';
import Img from 'components/Img';

import Wrapper from './Wrapper';
import NavBar from './NavBar';


const Icon = styled(Img)`
  padding-bottom: 10px;
`;
const ProfileIcon = styled(Icon)`
  width: 24px;
`;
const AccountsIcon = styled(Icon)`
  width: 26px;
`;
const LogoutIcon = styled(Icon)`
  width: 20px;
`;

const UserNav = props => {
  return (
    <Wrapper>
      {
        props.isLoggedIn
          ? (
            <NavBar>
              <NavLink to="/profile" >
                <ProfileIcon src={require('img/icons/Icon_Button_Userprofile.png')} alt="profile" />
              </NavLink>
              <NavLink to="/accounts">
                <AccountsIcon src={require('img/icons/Icon_Button_Settings.png')} alt="accounts" />
              </NavLink>
              <NavLink to="/logout" >
                <LogoutIcon src={require('img/icons/Icon_Button_Logout.png')} alt="logout" />
              </NavLink>
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
