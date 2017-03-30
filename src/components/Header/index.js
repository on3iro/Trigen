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
      <Grid lg={1 / 6}>
        <Logo to="/">
          <Img src={require('img/Trigen_Logo.png')} alt="trigen logo" />
        </Logo>
      </Grid>
      <Grid lg={4 / 6}>
        <Navigation />
      </Grid>
      <Grid lg={1 / 6}>
        <UserNav {...props} />
      </Grid>
    </Wrapper>
  );
};

export default Header;
