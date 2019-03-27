import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';
import { merge } from 'lodash';

const _nullSession = {
currentUser: null,
};

const SessionReducer = (oldState = _nullSession, action) => {
  Object.freeze(oldState);
  let newState = newState;
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState, {currentUser: action.user});
      return newState;
    case LOGOUT_CURRENT_USER:
      newState = merge({}, oldState, _nullSession);
      return newState;
    default:
      return oldState;  
  }
};

export default SessionReducer;