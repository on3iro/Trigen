import styled from 'styled-components';


const Divider = styled.div`
  width: 2px;
  height: 70%;
  margin-top: 20px;
  padding: 100% 0 100% 0;

  border: 1px solid ${props => props.theme.lightGrey};
`;

export default Divider;
