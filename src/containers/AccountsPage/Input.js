/**
  * A simple restyled Input component
  */

import styled from 'styled-components';

import Input from 'components/Input';

export default styled(Input)`
  display: inline-block;
  margin-right: 5px;
  padding: 2px 5px;
  width: ${props => props.user ? '38%' : '50%'};
  height: 22px;

  font-size: 17px;
  line-height: 17px;
`;
