import React from 'react';
import { Route } from 'react-router-dom';

import Auth from 'containers/Auth';
import Register from 'containers/Auth/Register';


const LoginPage = props => {
  return (
    <div>
      <p>do you dare?</p>
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Register} />
    </div>
  );
};

export default LoginPage;
