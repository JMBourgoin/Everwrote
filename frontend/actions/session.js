import * as ApiUtil from '../util/api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const createNewUser = (user) => dispatch => {
  return ApiUtil.createUser(user).then(user => dispatch(receiveCurrentUser(user)
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const createNewSession = (user) => dispatch => {
  return ApiUtil.createSession(user).then(user => dispatch(receiveCurrentUser(user)
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ));
};

export const logoutUser = () => dispatch => {
  return ApiUtil.deleteSession().then(() => dispatch(logoutCurrentUser()));
};