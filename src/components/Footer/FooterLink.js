import styled from 'styled-components';
import { Link } from 'react-router-dom';


const FooterLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.noneWhite};

  &:hover {
    color: ${props => props.theme.main};
  }
`;

export default FooterLink;
