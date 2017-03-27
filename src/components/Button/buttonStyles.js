/**
 * Creates button specific styles which can be applied to different elements/components
 *
 * @namespace Button.buttonStyles
 * @memberOf Button
  */

import { css } from 'styled-components';


const buttonStyles = css`
  display: inline-block;
  margin: 5px;
  padding: 0 5px;

  text-decoration: none;
  background-color: ${props => props.warning ? '#bc3b2a' : '#7e9b24'};
  color: #fff;
  outline: 0;
  border-radius: 1px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.warning ? 'tomato' : '#49ab33'};
  }
`;

export default buttonStyles;
