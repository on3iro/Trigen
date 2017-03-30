/**
  * Renders a Navigation with react-router Links
  *
  * @namespace Navigation
  */

import React from 'react';
import Grid from 'grid-styled';

import Wrapper from './Wrapper';
import NavBar from './NavBar';
import NavLink from 'components/NavLink';

const Navigation = () => {
  return (
    <Wrapper>
      <NavBar>
        <Grid lg={1 / 3}>
          <NavLink exact to="/">
            Startseite
          </NavLink>
        </Grid>
        <Grid lg={1 / 3}>
          <NavLink to="/pricing">
            Preise
          </NavLink>
        </Grid>
        <Grid lg={1 / 3}>
          <NavLink to="/faq">
            FAQ
          </NavLink>
        </Grid>
      </NavBar>
    </Wrapper>
  );
};

export default Navigation;
