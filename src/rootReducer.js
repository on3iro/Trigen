import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from 'containers/Auth/ducks/reducers';
import accounts from 'containers/AccountsPage/ducks/reducers';


export default combineReducers({
  form: formReducer,
  auth,
  accounts,
});
