/**
  * A simple login form
  *
  * @namespace LoginForm
  * @memberOf module:HomePage
  */

import React from 'react';

import H1 from 'components/H1';
import Button from 'components/Button';
import Input from 'components/Input';


const LoginForm = () => {
  return (
    <form onSubmit={() => {}}>
      <H1>Login</H1>
      <Input type="text" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button submit>Login</Button>
    </form>
  );
};

export default LoginForm;
