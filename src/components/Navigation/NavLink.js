/**
  * Renders a single NavLink item containing an li and a preformatted react-router Link
  *
  * @namespace Navigation.NavLink
  * @memberOf Navigation
  */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import StyledLink from 'components/StyledLink';


const Li = styled.li`
  float: left;
  display: inline;

  &:hover {
    background-color: #666;
  }
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
