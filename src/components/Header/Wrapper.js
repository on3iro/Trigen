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
  margin-bottom: 10px;
  min-height: 40px;
  width: 100%;
  background-color: #333;
  color: #fff;
`;

export default Wrapper;
