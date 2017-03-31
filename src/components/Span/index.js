import styled from 'styled-components';


const Span = styled.span`
  color: ${props => props.error ? props.theme.warning : '#000'};
`;

export default Span;
