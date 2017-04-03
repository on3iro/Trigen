/**
  * HomePage of the App
  *
  * @namespace HomePage
  */

import React from 'react';

import Wrapper from './Wrapper';
import SuggestionInput from 'components/SuggestionInput';


const Home = () => {
  return (
    <Wrapper>
      <p>
        DISCLAIMER: This is a university project and not a real site.
        For further information please visit <a href="https://github.com/on3iro/passCreator-Frontend">github.com/on3iro/passCreator-Frontend</a>
      </p>
      <SuggestionInput />
    </Wrapper>
  );
};


export default Home;
