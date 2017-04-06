/**
  * The user navigation component for easy access of login/logout and profile-settings
  * @namespace UserNav
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Grid from 'grid-styled';

import Button from 'components/Button';

import NavBar from './NavBar';
import UserNavLink from './UserNavLink';

import settingsIcon from 'img/icons/Icon_Button_Settings.png';
import logoutIcon from 'img/icons/Icon_Button_Logout.png';


const Icon = styled.div`
  padding-bottom: 10px;
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
  const location = props.routerLocation || { pathname: '' };

  return (
    <Grid md={3 / 3}>
      {
        props.isLoggedIn
          ? (
            <NavBar>
              <Grid md={1 / 3}>
                <UserNavLink to="/accounts" icon={settingsIcon} >
                  <AccountsIcon className="accounts" />
                </UserNavLink>
              </Grid>
              <Grid md={1 / 3}>
                <UserNavLink to="/logout" icon={logoutIcon} >
                  <LogoutIcon className="logout" />
                </UserNavLink>
              </Grid>
            </NavBar>
          ) : (
            <NavBar>
              <Grid md={3 / 3}>
                {
                  location.pathname === '/login'
                    ? <Button to="/register">
                        Registrieren
                      </Button>
                    : <Button to="/login">
                        Anmelden
                      </Button>
                }
              </Grid>
            </NavBar>
          )
      }
    </Grid>
  );
};

UserNav.propTypes = {
  isLoggedIn: PropTypes.bool,
  routerLocation: PropTypes.object,
};

export default UserNav;
