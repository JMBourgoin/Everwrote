import {
   RECEIVE_ALL_NOTEBOOKS,
   RECEIVE_NOTEBOOK,
   DELETE_NOTEBOOK
    } from '../../actions/notebooks';
  import { merge } from 'lodash';


const NotebooksReducer = (oldState = {}, action)=>{
  Object.freeze(oldState);
  let newState = newState;
  switch(action.type){
    case RECEIVE_ALL_NOTEBOOKS:
      return action.notebooks;
    case RECEIVE_NOTEBOOK:
      newState = merge({}, oldState, {[action.notebook.id]: action.notebook});
      return newState;
    case DELETE_NOTEBOOK:
      newState = merge({}, oldState);
      let id = action.id.id;
      debugger
      delete newState[id];
      return newState;
    default:
      return oldState;
  }
};

export default NotebooksReducer;