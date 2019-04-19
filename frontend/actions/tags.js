import * as ApiUtil from '../util/api_util';
export const RECEIVE_ALL_TAGS = "RECEIVE_ALL_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const DELETE_TAG = "DELETE_TAG";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ALL_JOINS = "RECEIVE_ALL_JOINS";
export const RECEIVE_JOIN = "RECEIVE_JOIN";
export const DELETE_JOIN = "DELETE_JOIN";

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

const destroyTag = (id) => {
  return ({
    type: DELETE_TAG,
    id
  });
};

const removeTag = (join) => {
  return ({
    type: DELETE_JOIN,
    join
  });
}

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveAllJoins= joins => ({
      type: RECEIVE_ALL_JOINS,
      joins,
});

export const receiveJoin = (join) => ({
        type: RECEIVE_JOIN,
        join
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
  return ApiUtil.deleteTag(id).then(id => dispatch(destroyTag(id)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const fetchAllJoins = () => dispatch => {
  return ApiUtil.fetchAllJoins().then(joins => dispatch(receiveAllJoins(joins))
  )};

export const addTagToNote = (join) => dispatch => {
    return ApiUtil.addTagToNote(join).then(join => dispatch(receiveJoin(join))
    )
};

export const deleteJoin = (join) => dispatch => {
  return ApiUtil.deleteJoin(join).then(join => dispatch(removeTag(join)))
}