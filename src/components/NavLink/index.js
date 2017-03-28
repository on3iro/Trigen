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
  width: 100%;
  height: 100%;

  text-align: center;

  &:hover {
  background-color: ${props => props.theme.headerHover};
  }
`;

export const RestyledLink = styled(StyledLink)`
  display: block;
  margin: 0;
  padding: 20px;
  width: 100%;
  height: 100%;

  color: ${props => props.theme.noneWhite};
  font-size: 24px;
  font-family: ${props => props.theme.primaryFont};
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
