/**
 * A simple styled react-router Link element.
  */

import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(Link)`
  display: inline-block;
  margin: 5px;
  width: 100px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  outline: 0;
`;

export default StyledLink;
