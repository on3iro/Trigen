/**
  * Renders a Header with a Logo and a navigation
  *
  * @namespace Header
  */

import React from 'react';
import Grid from 'grid-styled';

import Navigation from 'components/Navigation';
import UserNav from 'components/UserNav';

import Logo from './Logo';
import Img from './Img';
import Wrapper from './Wrapper';


export const Header = props => {
  return (
    <Wrapper>
      <Grid md={1 / 6}>
        <Logo to="/">
          <Img src={require('img/Trigen_Logo.png')} alt="trigen logo" />
        </Logo>
      </Grid>
      <Grid md={1 / 6} />
      <Grid md={3 / 6}>
        <Navigation {...props} />
      </Grid>
      <Grid md={1 / 6}>
        <UserNav {...props} />
      </Grid>
    </Wrapper>
  );
};

export default Header;
