import styled from 'styled-components';


const Span = styled.span`
  color: ${props => props.error ? props.theme.warning : props.theme.outlines};
`;

export default Span;
