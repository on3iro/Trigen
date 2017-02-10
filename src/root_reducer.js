import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // This is just a simple test reducer
  // TODO implement real reducers
  root: (state = 'Hi', action) => {
    switch(action.type) {
      default: {
        return state;
      }
    }
  },
});

export default rootReducer;
