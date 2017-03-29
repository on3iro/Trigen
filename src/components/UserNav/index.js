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


const RestyledNavLink = styled(NavLink)`
  margin-right: 25px;
`;
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
              <RestyledNavLink to="/profile" >
                <ProfileIcon src={require('img/icons/Icon_Button_Userprofile.png')} alt="profile" />
              </RestyledNavLink>
              <RestyledNavLink to="/accounts">
                <AccountsIcon src={require('img/icons/Icon_Button_Settings.png')} alt="accounts" />
              </RestyledNavLink>
              <RestyledNavLink to="/logout" >
                <LogoutIcon src={require('img/icons/Icon_Button_Logout.png')} alt="logout" />
              </RestyledNavLink>
            </NavBar>
          ) : (
            <NavBar>
              <RestyledNavLink to="/login" >
                Login
              </RestyledNavLink>
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
