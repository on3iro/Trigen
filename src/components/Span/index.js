import styled from 'styled-components';


const Span = styled.span`
  color: ${props => props.error ? '#bc3b2a' : '#000'};
`;

export default Span;
