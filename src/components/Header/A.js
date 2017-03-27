/**
  * Renders a reformatted anchor
  *
  * @namespace Header.A
  * @memberOf Header
  */

import styled from 'styled-components';

import NormalA from 'components/A';


const A = styled(NormalA)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
`;

export default A;
