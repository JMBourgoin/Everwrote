import { combineReducers } from 'redux';
import LoginErrorReducer from './login_error_reducer';
import NoteTitleErrorReducer from './note_title_error_reducer';
import NoteBodyErrorReducer from './note_body_error_reducer';
import TagErrorReducer from './tag_error_reducer';




const ErrorsReducer = combineReducers({
  login: LoginErrorReducer,
  noteTitle: NoteTitleErrorReducer,
  noteBody: NoteBodyErrorReducer,
  tag: TagErrorReducer
});

export default ErrorsReducer;