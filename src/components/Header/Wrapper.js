/**
  * Styled container for Header
  *
  * @namespace Header.Wrapper
  * @memberOf Header
  */

import styled from 'styled-components';


const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 30px;
  min-height: 70px;
  height: 70px;
  width: 100%;
  background-color: ${props => props.theme.mainBG};
  color: ${props => props.theme.noneWhite};
`;

export default Wrapper;
