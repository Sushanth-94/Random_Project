import { combineReducers } from 'redux';
import authReducer from './auth';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  auth : authReducer,
  errors: errorReducer
});

export default rootReducer;
