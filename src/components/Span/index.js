import styled from 'styled-components';


const Span = styled.span`
  color: ${props => props.error ? props.theme.secondary : '#000'};
`;

export default Span;
