import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import { incomeReducer } from './incomeReducer';

const rootReducer = combineReducers({
  // income: incomeReducer,
  form: formReducer
});

export default rootReducer;
