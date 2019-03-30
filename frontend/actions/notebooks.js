import * as ApiUtil from '../util/api_util';
export const RECEIVE_ALL_NOTEBOOKS = "RECEIVE_ALL_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK";
export const DELETE_NOTEBOOK = "DELETE_NOTEBOOK";

const receiveAllNotebooks = (notebooks) => {
  return ({
    type: RECEIVE_ALL_NOTEBOOKS,
    notebooks,
  });
};

const receiveNotebook = notebook => {
  return ({
    type: RECEIVE_NOTEBOOK,
    notebook
  });
};

const removeNotebook = (id) => {
  return ({
    type: DELETE_NOTEBOOK,
    notebookId: id
  });
};

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const fetchAllNotebooks = () => dispatch => {
  return ApiUtil.fetchAllNotebooks().then(notebooks => dispatch(receiveAllNotebooks(notebooks)),
  err => (dispatch(receiveErrors(err.responseJSON))
  ));
};

export const fetchNotebook = (id) => dispatch => {
  return ApiUtil.fetchNotebook(id).then(notebook => dispatch(receiveNotebook(notebook)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const createNotebook = (notebook) => dispatch => {
  return ApiUtil.createNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const updateNotebook = (notebook) => dispatch => {
  return ApiUtil.updateNotebook(notebook).then(notebook => dispatch(receiveNotebook(notebook)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};

export const deleteNotebook = (id) => dispatch => {
  return ApiUtil.deleteNotebook(id).then(id => dispatch(removeNotebook(id)),
    err => (dispatch(receiveErrors(err.responseJSON))
    ));
};