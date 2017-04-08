import styled from 'styled-components';


const Wrapper = styled.div`
  margin: 0 0 20px 0;
  padding: 10px 20px;

  border-radius: 4px;

  background: ${props => props.error ? props.theme.warningHover : props.theme.primaryHover};
  opacity: .6;
  color: #fff;
`;

export default Wrapper;
