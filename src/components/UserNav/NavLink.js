/**
  * Renders a single NavLink item containing an li and a preformatted react-router Link
  *
  * @namespace Navigation.NavLink
  * @memberOf Navigation
  */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';


export const Li = styled.li`
  float: left;
  display: inline;

  &:hover {
    background-color: #666;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  margin: 5px;
  width: 100px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  outline: 0;
`;

const NavLink = props => {
  return (
    <Li>
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </Li>
  );
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavLink;
