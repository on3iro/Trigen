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
  &:hover {
    background-color: #666;
  }
`;

export const RestyledLink = styled(StyledLink)`
  margin: 0;
  height: 100%;
  padding: 8px 0;

  color: #fff;
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
