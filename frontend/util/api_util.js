// SESSION----------------------------------------------------------------------

export const createUser = user => {
  return $.ajax ({
    url: 'api/users',
    method: 'POST',
    data: { user }
  });
};

export const createSession = user => {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user }
  });
};

export const deleteSession = () => {
  return $.ajax({
    url: `api/session/`,
    method: 'DELETE',
  });
};

// NOTEBOOKS -------------------------------------------------------------------

export const fetchAllNotebooks = () => {
  return $.ajax({
    url: 'api/notebooks/',
    method: 'GET'
  });
};

export const fetchNotebook = id => {
  return $.ajax({
    url: `api/notebooks/${id}`,
    method: 'GET'
  });
};

export const createNotebook = notebook => {
  return $.ajax({
    url: `api/notebooks/`,
    method: 'POST',
    data: { notebook }
  });
};

export const updateNotebook = notebook => {
  return $.ajax({
    url: `api/notebooks/${notebook.id}`,
    method: 'PATCH',
    data: { notebook }
  });
};

export const deleteNotebook = id => {
  return $.ajax({
    url: `api/notebooks/${id}`,
    method: 'DELETE',
    data: { id }
  });
};

// NOTES -----------------------------------------------------------------------

export const fetchAllNotes = () => {
  return $.ajax({
    url: `api/notes`,
    method: 'GET'
  });
};

export const fetchNote = (id) => {
  return $.ajax({
    url: `api/notes/${id}`,
    method: 'GET'
  });
};

export const createNote = note => {
  return $.ajax({
    url: `api/notes`,
    method: 'POST',
    data: { note }
  });
};

export const updateNote = note => {
  return $.ajax({
    url: `api/notes/${note.id}`,
    method: 'PATCH',
    data: { note }
  });
};

export const deleteNote = id => {
  return $.ajax({
    url: `api/notes/${id}`,
    method: 'DELETE',
    data: { id }
  });
};

