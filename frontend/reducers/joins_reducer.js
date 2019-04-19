import { RECEIVE_JOIN, RECEIVE_ALL_JOINS, DELETE_JOIN } from '../actions/tags';
import { merge } from 'lodash';



const JoinsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = newState;
  switch(action.type){
    case RECEIVE_ALL_JOINS:
      return action.joins;
    case RECEIVE_JOIN:
      newState = merge({}, oldState, {[action.join.id]: action.join});
      return newState;
    case DELETE_JOIN:
      newState = merge({}, oldState);
      delete newState[action.join.id];
      return newState; 
    default:
      return oldState;  
  }
};

export default JoinsReducer;