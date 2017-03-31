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

const Navigation = props => {
  return (
    <Wrapper>
      <NavBar>
        {
          props.isLoggedIn &&
            <NavLink to="/home">
              Startseite
            </NavLink>
        }
        <NavLink to="/pricing">
          Slots Kaufen / Preise
        </NavLink>
        <NavLink to="/faq">
          FAQ
        </NavLink>
      </NavBar>
    </Wrapper>
  );
};

export default Navigation;
