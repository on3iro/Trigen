/**
 * Styled container for Footer
 *
 * @namespace Footer.Wrapper
 * @memberOf Footer
  */

import styled from 'styled-components';


const Wrapper = styled.footer`
  flex: none;
  flex-shrink: 0;
  padding: 20px 40px;
  height: 80px;
  width: 100%;
  margin-top: 50px;

  background-color: ${props => props.theme.mainBG};
`;

export default Wrapper;
