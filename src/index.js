/**
  * Global entry point to the app
  *
  * @namespace AppEntryPoint
  */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// Styles
import 'sanitize.css/sanitize.css';
import './global-styles';

import store from './store';
import routes from './routes';


const rootElement = document.getElementById('root');
const history = syncHistoryWithStore(hashHistory, store);

ReactDom.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  rootElement
);
