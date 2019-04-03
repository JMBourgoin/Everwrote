import { 
  RECEIVE_SESSION_ERRORS, 
  RECEIVE_CURRENT_USER, 
  CLEAR_ERRORS} from '../../actions/session';

const LoginErrorReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default LoginErrorReducer;