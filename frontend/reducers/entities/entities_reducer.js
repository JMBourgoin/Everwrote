
import { combineReducers } from 'redux';
import NotebooksReducer from './notebooks_reducer';
import UsersReducer from './users_reducer';
import NotesReducer from './notes_reducer';
import TagsReducer from './tags_reducer';



const EntitiesReducer = combineReducers({
  users: UsersReducer,
  notebooks: NotebooksReducer,
  notes: NotesReducer,
  tags: TagsReducer
});

export default EntitiesReducer;