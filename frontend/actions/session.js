import * as ApiUtil from '../util/api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createNewUser = (user) => dispatch => {
  return ApiUtil.createUser(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const createNewSession = (user) => dispatch => {
  return ApiUtil.createSession(user).then(user => dispatch(receiveCurrentUser(user)));
};

export const logoutUser = () => dispatch => {
  return ApiUtil.deleteSession().then(() => dispatch(logoutCurrentUser()));
};