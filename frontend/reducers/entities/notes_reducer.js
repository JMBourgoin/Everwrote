import {
  RECEIVE_ALL_NOTES,
  RECEIVE_NOTE,
  DELETE_NOTE
} from '../../actions/notes';
import { merge } from 'lodash';


const NotesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = newState;
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      newState = merge({}, oldState, { [action.note.id]: action.note });
      return newState;
    case DELETE_NOTE:
      newState = merge({}, oldState);
      let id = action.id.id;
      delete newState[id];
      return newState;
    default:
      return oldState;
  }
};

export default NotesReducer;