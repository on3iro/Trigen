/**
  * A restyled Button component
  */

import styled from 'styled-components';

import Button from 'components/Button';


const AddButton = styled(Button)`
  position: relative;
  width: 20px;
  height: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    background: ${props => props.theme.noneWhite};
  }

  &::before {
    top: 25%;
    bottom: 25%;
    left: 48%;
    width: 5%;
  }

  &::after {
    left: 25%;
    right: 25%;
    top: 48%;
    height: 5%;
  }
`;

export default AddButton;
