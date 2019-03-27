import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  SessionReducer,
});

export default RootReducer;