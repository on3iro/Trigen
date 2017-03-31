import styled from 'styled-components';


const Span = styled.span`
  display: block;
  margin: -10px 0 10px 5px;

  color: ${props => props.error ? props.theme.warning : props.theme.outlines};
`;

export default Span;
