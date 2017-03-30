/**
 * Creates button specific styles which can be applied to different elements/components
 *
 * @namespace Button.buttonStyles
 * @memberOf Button
  */

import { css } from 'styled-components';


const buttonStyles = css`
  display: inline-block;
  margin: 0;
  padding: 2px 10px;
  width: 100%;
  height: 30px;

  text-decoration: none;
  background-color: ${props => props.warning ? props.theme.secondary : props.theme.primary};
  color: ${props => props.theme.noneWhite};
  outline: 0;
  border-radius: 1px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.warning ? 'tomato' : '#49ab33'};
  }
`;

export default buttonStyles;
