import * as ApiUtil from '../util/api_util';
export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllTags = (tags) => {
  return ({
    type: RECEIVE_ALL_TAGS,
    tags,
  });
};

const receiveTag = tag => {
  return ({
    type: RECEIVE_TAG,
    tag
  });
};

const removeTag = (id) => {
  return ({
    type: DELETE_TAG,
    id
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchAllTags = () => dispatch => {
  return ApiUtil.fetchAllTags().then(tags => dispatch(receiveAllTags(tags)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const fetchTag = (id) => dispatch => {
  return ApiUtil.fetchTag(id).then(tag => dispatch(receiveTag(tag)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const createTag = (tag) => dispatch => {
  return ApiUtil.createTag(tag).then(tag => dispatch(receiveTag(tag)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const updateTag = (tag) => dispatch => {
  return ApiUtil.updateTag(tag).then(tag => dispatch(receiveTag(tag)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const deleteTag = (id) => dispatch => {
  return ApiUtil.deleteTag(id).then(id => dispatch(removeTag(id)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};