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
  border: 1px solid ${props => props.error ? '#bc3b2a' : '#bbb4b3'};
  border-radius: 1px;
  color: #333;
  outline: 0;

  &:placeholder-shown,
  &:-ms-input-placeholder {
    color: #bbb4b3;
  }
`;

const Input = props => {
  return (
    <StyledInput {...props} />
  );
};

export default Input;
