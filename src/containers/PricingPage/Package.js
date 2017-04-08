import React from 'react';
import styled from 'styled-components';

import H2 from 'components/H2';
import Button from 'components/Button';


export const Wrapper = styled.div`
  margin: 0 15px;
  padding: 10px 20px;
  height: 100%;

  border: 1px solid ${props => props.theme.outlines};

  background: ${props => props.theme.lightGrey};
`;

export const InnerWrapper = styled.div`
  margin: 10px 0 0 0;
  padding: 20px;
  width: 100%;
  height: 80%;

  background: ${props => props.theme.noneWhite};
`;

export const Package = props => {
  return (
    <Wrapper>
      <H2>{props.name}</H2>
      <InnerWrapper>
        <p>{props.amount}</p>
        <p>{props.price}</p>
        <p>{props.description}</p>
        <Button primary>Jetzt kaufen</Button>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Package;
