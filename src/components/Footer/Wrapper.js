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
  min-height: 100px;
  width: 100%;
  margin-top: 50px;
  padding: 30px;

  background-color: ${props => props.theme.mainBG};
`;

export default Wrapper;
