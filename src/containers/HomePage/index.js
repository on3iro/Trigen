/**
  * HomePage of the App
  *
  * @namespace HomePage
  */

import React from 'react';

import LoginForm from './LoginForm';
import Wrapper from './Wrapper';


const Home = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};


export default Home;
