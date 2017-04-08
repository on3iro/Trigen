/**
  * PasswordGenerator of the App
  *
  * @namespace PasswordGenerator
  */

import React from 'react';

import Wrapper from './Wrapper';
import PassGenForm from './PassGenForm';
import H1 from 'components/H1';


const PasswordGenerator = () => {
  return (
    <Wrapper>
      <H1>Passwort Generator</H1>
      <PassGenForm />
    </Wrapper>
  );
};

export default PasswordGenerator;
