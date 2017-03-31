import React from 'react';
import styled from 'styled-components';

import Img from 'components/Img';


const Wrapper = styled.div`
  height: 100%;
`;
const StyledImg = styled(Img)`
  margin-left: 0;
  width: 320px;
`;

const Jumbotron = props => {
  return (
    <Wrapper>
      <StyledImg src={require('img/Trigen_Logo.png')} alt="Trigen Logo" />
    </Wrapper>
  );
};

export default Jumbotron;
