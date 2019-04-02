
import React from 'react';
import { Link } from "react-router-dom";

 const NotesIndexItem = (props) => {
  const title = props.note.title;
  const body = props.note.body.slice(0,150);
  const created_at = props.note.created_at;
  const updated_at = props.note.updated_at;

   const monthStr = [
     "Jan",
     "Feb",
     "Mar",
     "Apr",
     "May",
     "Jun",
     "Jul",
     "Aug",
     "Sep",
     "Oct",
     "Nov",
     "Dec"
   ];

   const createdDate = new Date(created_at);
   const updatedDate = new Date(updated_at);
   const monthUpdated = monthStr[updatedDate.getMonth()];
   const dayCreated = createdDate.getDate();
   const monthCreated = monthStr[createdDate.getMonth()];
   const dayUpdated = updatedDate.getDate();
   const updated = `${monthUpdated} ${dayUpdated}`;
   const created = `${monthCreated} ${dayCreated}`;
  
  
   return (
    <div className="notes-idx-item-outer-container">
        <div className="notes-idx-item-inner-container">
          <div className="notes-idx-title-container"><h3>{title}</h3></div>
          <div className="notes-idx-body-container"><p>{body}...</p></div>
          <div className="notes-idx-times-container">
            <div>
              <p>created</p>
              <h6>{created}</h6>
            </div>
            <div>
              <p>updated</p>
              <h6>{updated}</h6>
            </div>
          </div>
        </div>
    </div>
  )
};

export default NotesIndexItem;