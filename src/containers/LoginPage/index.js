import React from 'react';
import { Route } from 'react-router-dom';
import Grid from 'grid-styled';
import styled from 'styled-components';

import Auth from 'containers/Auth';
import Register from 'containers/Auth/Register';

import Wrapper from './Wrapper';
import Jumbotron from './Jumbotron';
import Divider from './Divider';
import IntroText from './IntroText';


export const Disclaimer = styled.p`
  &, strong {
    color: ${props => props.theme.main};
    font-size: 0.7rem;
  }

  a {
    color: ${props => props.theme.primary};
    font-size: 0.8rem;
    text-decoration: none;

    &:hover {
      color: ${props => props.theme.primaryHover};
    }
  }
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <Grid md={5 / 10}>
        <Jumbotron />
        <Grid md={10 / 10}>
          <IntroText>
            <strong>Hi!</strong>  <br/>
            Und nun zur Sache:
            <strong> Trigen</strong> ist ein Passwort-Generator. Statt Dir Passwörter weiterhin
            merken zu müssen, kannst Du sie Dir einfach immer dann generieren,
            wenn Du sie brauchst. Dazu musst Du Dir nur Dein persönliches
            <strong> Masterpasswort</strong> ausdenken und gut merken. <strong>Fertig!</strong>
          </IntroText>
          <Disclaimer><strong>DISCLAIMER: </strong>
            This is a university project and no actual product!
            For further information please visit: <a href="https://github.com/on3iro/passCreator-Frontend">github/on3iro/passCreator-Frontend</a>
          </Disclaimer>
        </Grid>
      </Grid>
      <Grid md={1 / 10} className="fullHeight">
        <Divider />
      </Grid>
      <Grid md={4 / 10} className="form">
        <Route path="/login" component={Auth} />
        <Route path="/register" component={Register} />
      </Grid>
    </Wrapper>
  );
};

export default LoginPage;
