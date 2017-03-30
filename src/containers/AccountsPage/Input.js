/**
  * A simple restyled Input component
  */

import styled from 'styled-components';

import Input from 'components/Input';

export default styled(Input)`
  display: inline-block;
  padding: 2px 10px;
  width: 100%;
  height: 30px;

  font-size: 17px;
  line-height: 17px;

  color: ${props => props.theme.main};
  background: ${props => props.theme.border}
`;
