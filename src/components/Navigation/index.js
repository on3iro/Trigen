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
              Passwort Generieren
            </NavLink>
        }
        <NavLink to="/pricing">
          Slots / Preise
        </NavLink>
        <NavLink to="/faq">
          FAQ
        </NavLink>
      </NavBar>
    </Wrapper>
  );
};

Navigation.propTypes = {
  isLoggedIn: React.PropTypes.bool,
};

export default Navigation;
