/**
  * React-router route configurations.
  *
  * @namespace Routes
  */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/HomePage';
import Impressum from './containers/ImpressumPage';
import Accounts from './containers/AccountsPage';
import AGBPage from './containers/AGBPage';
import FAQ from './containers/FAQPage';
import Password from './containers/PasswordPage';
import Pricing from './containers/PricingPage';
import UserProfile from './containers/ProfilePage';
import Register from './containers/RegisterPage';


export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/impressum" component={Impressum} />
    <Route path="/accounts" component={Accounts} />
    <Route path="/agb" component={AGBPage} />
    <Route path="/faq" component={FAQ} />
    <Route path="/password" component={Password} />
    <Route path="/pricing" component={Pricing} />
    <Route path="/profile" component={UserProfile} />
    <Route path="/register" component={Register} />
  </Route>
);
