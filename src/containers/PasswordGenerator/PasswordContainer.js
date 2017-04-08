import React from 'react';
import styled from 'styled-components';

import Span from 'components/Span';
import Progress from './Progress';


const Wrapper = styled.div`
  margin-top: 20px;
  padding: 10px;

  border: 1px solid ${props => props.theme.outlines};

  text-align: center;

  p {
    padding: 5px;

    background: ${props => props.theme.simple};
    opacity: 0.6;
  }
`;

const PasswordContainer = props => {
  return (
    <Wrapper>
      <label><strong>Passwort:</strong></label>
      <p>{props.password}</p>
      <Span warning error>
        Das Passwort wird 30 Sekunden lang angezeigt, damit Du es kopieren kannst!
      </Span>
      <Progress isInprogress={props.inProgress}/>
    </Wrapper>
  );
};

export default PasswordContainer;
