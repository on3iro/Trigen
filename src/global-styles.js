/**
 * These are globally applied css styles. Use those sparingly
 * and only when absolutely necessary. Usually component styles will do.
  */

import  { injectGlobal } from 'styled-components';


injectGlobal`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    font-family: ${props => props.theme.primaryFont};
  }

  #root {
    background-color: #fafafa;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
  }

  ul {
    list-style: none;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
