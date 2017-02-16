/**
  * The 'Home'-page Component of the app.
  *
  * @module containers/HomePage
  */

import React from 'react';

import LoginForm from './LoginForm';
import Wrapper from './Wrapper';


export const Home = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};


export default Home;
