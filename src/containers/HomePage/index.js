/**
  * HomePage of the App
  *
  * @namespace HomePage
  */

import React from 'react';

import Wrapper from './Wrapper';
import PassGenForm from './PassGenForm';


const Home = () => {
  return (
    <Wrapper>
      <PassGenForm />
    </Wrapper>
  );
}

export default Home;
