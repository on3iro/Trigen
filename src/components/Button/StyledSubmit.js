/**
  * Renders a submit input with button styles
  *
  * @namespace StyledSubmit
  * @memberOf module:Button
  */

import React from 'react';
import styled from 'styled-components';

import buttonStyles from './buttonStyles';


const StyledInput = styled.input`
  ${buttonStyles}
`;

const StyledSubmit = props => {
  return (
    <StyledInput type="submit" value={props.children} />
  );
};

export default StyledSubmit;
