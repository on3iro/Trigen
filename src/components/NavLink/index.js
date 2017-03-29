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
  width: 22%;
  height: 100%;

  text-align: center;

  &:hover a {
    color: ${props => props.theme.main};
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

  &.active {
    color: ${props => props.theme.main};
  }
`;

const NavLink = props => {
  return (
    <Li>
      <RestyledLink
        {...props}
      >
        {props.children}
      </RestyledLink>
    </Li>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default NavLink;
