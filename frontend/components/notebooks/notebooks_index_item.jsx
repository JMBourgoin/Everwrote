import React from 'react';
import { Link } from 'react-router-dom';

 const NotebookIndexItem = ({id, title, author_id, created_at, updated_at}) => {
  return (
    <Link 
      to={`/notebooks/${id}`}
      title={title}
      key={id}
      author_id={author_id}
      created={created_at}
      updated={updated_at}
      >
    </Link>
  );
};

export default NotebookIndexItem;