import * as ApiUtil from '../util/api_util';
export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

const receiveAllNotes = (notes) => {
  return ({
    type: RECEIVE_ALL_NOTES,
    notes,
  });
};

const receiveNote = note => {
  return ({
    type: RECEIVE_NOTE,
    note
  });
};

const removeNote = (id) => {
  return ({
    type: DELETE_NOTE,
    id
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const fetchAllNotes = () => dispatch => {
  return ApiUtil.fetchAllNotes().then(notes => dispatch(receiveAllNotes(notes)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const fetchNote = (id) => dispatch => {
  return ApiUtil.fetchNote(id).then(note => dispatch(receiveNote(note)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const createNote = (note) => dispatch => {
  return ApiUtil.createNote(note).then(note => dispatch(receiveNote(note)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const updateNote = (note) => dispatch => {
  return ApiUtil.updateNote(note).then(note => dispatch(receiveNote(note)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const deleteNote = (id) => dispatch => {
  return ApiUtil.deleteNote(id).then(id => dispatch(removeNote(id)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};