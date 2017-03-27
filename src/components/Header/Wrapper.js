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
  height: 100%;
  min-height: 50px;
  max-height: 70px;
  width: 100%;
  background-color: #878f93;
  color: #fff;
`;

export default Wrapper;
