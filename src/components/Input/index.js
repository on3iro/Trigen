/**
  * A simple styled controlled input element
  *
  * @namespace Input
  */

import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
  display: block;
  margin: 0 0 10px 0;
  padding: 5px 10px;
  border: 1px solid ${props => props.error ? props.theme.warning : props.theme.outlines};
  border-radius: 1px;
  background: ${props => props.theme.noneWhite};
  color: ${props => props.theme.text};
  outline: 0;

  &:placeholder-shown,
  &:-ms-input-placeholder {
    color: ${props => props.theme.outlines};
  }
`;

const Input = props => {
  return (
    <StyledInput {...props} />
  );
};

export default Input;
