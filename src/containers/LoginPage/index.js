import React from 'react';
import { Route } from 'react-router-dom';
import Grid from 'grid-styled';
import styled from 'styled-components';

import Auth from 'containers/Auth';
import Register from 'containers/Auth/Register';

import Jumbotron from './Jumbotron';
import Divider from './Divider';


const Wrapper = styled.div`
  height: 100%;

  .fullHeight {
    height: 100%;
  }

  .form {
    margin-top: 30px;
  }
`;

const IntroText = styled.p`
  margin: 50px 0 0 0 ;

  color: ${props => props.theme.lightText};
`;

const LoginPage = props => {
  return (
    <Wrapper>
      <Grid md={5 / 10}>
        <Jumbotron />
        <Grid md={9 / 10}>
          <IntroText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          </IntroText>
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
