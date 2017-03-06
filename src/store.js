/**
  * Root reducer
  *
  * @namespace Reducer
  */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { routerReducer } from 'react-router-redux';

import AccountListReducer from 'containers/AccountsPage/ducks/reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
  routing: routerReducer,
  accounts: AccountListReducer,
});
let store;

if(process.env.NODE_ENV === 'production') {
  store = createStore(reducers, applyMiddleware(promise, thunk));
}else {
  store = createStore(reducers, composeEnhancers(applyMiddleware(promise, thunk)));
}

export default store;
