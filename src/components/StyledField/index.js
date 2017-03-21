import styled from 'styled-components';
import { Field } from 'redux-form';


const StyledField = styled(Field)`
  display: block;
  margin: 0 0 10px 0;
  padding: 5px 10px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  color: #333;
  outline: 0;
`;

export default StyledField;
