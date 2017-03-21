import styled from 'styled-components';


const Span = styled.span`
  color: ${props => props.error ? 'red' : '#000'};
`;

export default Span;
