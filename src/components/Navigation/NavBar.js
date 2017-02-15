/**
  * Renders a container <NavBar /> for the <Navigation />
  *
  * @namespace NavBar
  * @memberOf module:Navigation
  */

import styled from 'styled-components';


export default styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0 0 0 40px;
  height: 100%;
  text-align: center;
  list-style-type: none;

  &::before,
  &::after {
    content: '';
    clear: both;
  }
`;
