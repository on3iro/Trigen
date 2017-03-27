/**
  * Global entry point to the app
  *
  * @namespace AppEntryPoint
  */

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

// Styles
import 'sanitize.css/sanitize.css';
import './global-styles';

import configureStore from './store';
import rootSaga from './rootSaga';
import App from 'containers/App';


const rootElement = document.getElementById('root');
const initialState = {};
const store = configureStore(initialState);

// Run rootSaga
store.runSaga(rootSaga);

const render = Component => {
  return ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootElement
  );
};

render(App);

if(module.hot) {
  module.hot.accept('containers/App', () => render(App));
}
