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
  position: relative;

  margin: 10px 0 0 0;
  padding: 20px;
  width: 100%;
  height: 80%;

  background: ${props => props.theme.noneWhite};
`;

export const P = styled.p`
  margin: 12% 0 0 0;
`;

export const RestyledButton = styled(Button)`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 90%;
  margin: 20px 5%;
`;

export const Package = props => {
  return (
    <Wrapper>
      <H2>{props.name}</H2>
      <InnerWrapper>
        <P>{props.amount} Slots</P>
        <P>{props.price}</P>
        <P>{props.description}</P>
        {
          props.isLoggedIn
            ? <RestyledButton onClick={() => props.handleClick(props.amount)} primary>Jetzt kaufen</RestyledButton>
            : <RestyledButton onClick={props.redirectClick} warning>Anmelden zum Kaufen</RestyledButton>
        }
      </InnerWrapper>
    </Wrapper>
  );
};

export default Package;
