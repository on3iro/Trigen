/**
  * Renders a reformatted anchor
  *
  * @namespace Header.A
  * @memberOf Header
  */

import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Logo = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 40px 0 80px;

  outline: 0;
`;

export default Logo;
