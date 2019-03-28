import { merge } from 'lodash';
import { RECEIVE_CURRENT_USER } from '../../actions/session.js';



const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = merge({}, oldState, {[action.user.id]: action.user});
      return newState;
    default:
      return oldState;
  }
};

export default UsersReducer;