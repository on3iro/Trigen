import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Impressum from './containers/impressum';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/impressum" component={Impressum} />
  </Route>
);
