import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import buttonStyles from './buttonStyles';


const  NavLinkWrapper = props => {
  const { secondary, ...rest } = props;
  return <NavLink {...rest} />
}
const StyledNavLink = styled(NavLinkWrapper)`${buttonStyles}`;

export default StyledNavLink;
