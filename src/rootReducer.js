import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from 'containers/Auth/ducks/reducers';


export default combineReducers({
  form: formReducer,
  auth,
});
