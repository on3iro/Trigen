/**
  * Renders a container NavBar for the Navigation
  *
  * @namespace Navigation.NavBar
  * @memberOf Navigation
  */

import styled from 'styled-components';


export default styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  min-width: 200px;
  margin: 0 50px 0 0;
  padding: 0;
  height: 100%;

  text-align: center;
  list-style-type: none;

  li {
    margin-right: 25px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
