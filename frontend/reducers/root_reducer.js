import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import EntitiesReducer from './entities/entities_reducer';
import ErrorsReducer from './errors/errors_reducer';
import JoinsReducer from './joins_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  entities: EntitiesReducer,
  joins: JoinsReducer,
  errors: ErrorsReducer
});

export default RootReducer;