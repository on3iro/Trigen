/**
  * Renders a single NavLink item containing an li and a preformatted react-router Link
  *
  * @namespace Navigation.NavLink
  * @memberOf Navigation
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import StyledLink from 'components/StyledLink';


export const Li = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 0 50px;
  text-align: center;

  &:hover {
    background-color: #666;
  }
`;

export const RestyledLink = styled(StyledLink)`
  margin: 0;
  width: 100%;

  color: #fcfcfa;
  font-size: 28px;
  font-family: Calibri, Helvetica, sans-serif;
`;

const NavLink = props => {
  return (
    <Li>
      <RestyledLink to={props.to}>{props.children}</RestyledLink>
    </Li>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavLink;
