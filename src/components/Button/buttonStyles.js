/**
 * Creates button specific styles which can be applied to different elements/components
 *
 * @namespace buttonStyles
 * @memberOf module:Button
  */

import { css } from 'styled-components';


const buttonStyles = css`
  display: inline-block;
  text-decoration: none;
  padding: 5px 10px;
  background-color: #27a70b;
  color: #fff;
  outline: 0;
  border-radius: 4px;
  font-weight: bold;

  &:hover {
   background-color: #49ab33;
  }
`;

export default buttonStyles;
