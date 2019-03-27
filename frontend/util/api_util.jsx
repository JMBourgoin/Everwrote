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
    url: 'api/users',
    method: 'DELETE',
  });
};