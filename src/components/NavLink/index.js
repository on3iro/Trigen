/**
  * Renders a single NavLink item containing an li and a preformatted react-router Link
  *
  * @namespace Navigation.NavLink
  * @memberOf Navigation
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Li = styled.li`
  display: inline-block;
  height: 100%;

  text-align: center;

  &:hover a {
    color: ${props => props.theme.main};
  }
`;

export const RestyledLink = styled(NavLink)`
  display: inline-block;
  height: 100%;
  padding: 5px 25px;

  color: ${props => props.theme.noneWhite};
  font-size: 24px;
  font-family: ${props => props.theme.primaryFont};
  text-decoration: none;

  outline: 0;

  &.active {
    color: ${props => props.theme.main};
  }
`;

const StyledNavLink = props => {
  const { icon, iconHover, secondary, ...rest } = props;
  return (
    <Li>
      <RestyledLink
        {...rest}
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

export default StyledNavLink;
