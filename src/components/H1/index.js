/**
  * Renders a styled h1
  *
  * @namespace H1
  */

import styled from 'styled-components';


const H1 = styled.h1`
  font-size: 29px;
  margin-top: 0;
  margin-bottom: 0.25em;

  color: ${props => props.theme.main};
`;

export default H1;
