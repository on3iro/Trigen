/**
 * Styled container for Footer
 *
 * @namespace Footer.Wrapper
 * @memberOf Footer
  */

import styled from 'styled-components';


const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 20px 40px;
  height: 80px;
  width: 100%;

  background-color: ${props => props.theme.mainBG};
`;

export default Wrapper;
