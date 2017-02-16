/**
  * Route entry point
  *
  * @namespace Routes
  */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/HomePage';
import Impressum from './containers/ImpressumPage';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/impressum" component={Impressum} />
  </Route>
);
