import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotebookActions from '../menus/notebooks_action_container';

const msp = (state, ownProps) => {
  let id = ownProps.id;
  let notebook = state.entities.notebooks[id];
  let author = state.entities.users[notebook.author_id].email;
  let notes = Object.values(state.entities.notes).filter(note => note.notebook_id === id);
  return({
    notebook,
    author,
    notes
  });
};

const mdp = dispatch => {
  return ({

  });
};

 class NotebookIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.notesUpdatedDate = this.notesUpdatedDate.bind(this);
  }
  
  
  notesUpdatedDate(notes){
    if(notes.length > 1){
      let updated = notes.reduce(function(acc, note){
        if(acc.updated_at < note.updated_at){
          acc = note;
          return acc;
        } else {
          return acc;
        }
      });
      return updated.updated_at;
    } else if (notes.length === 1){
      return notes[0].updated_at;
    } else {
      return '0';
    }

  }

  render (){
    const id = this.props.notebook.id;
    const created_at = this.props.notebook.created_at;    
    let updated_at = this.props.notebook.updated_at;
    const notes = this.props.notes;
    if(this.notesUpdatedDate(notes) != '0' && this.notesUpdatedDate(notes) > updated_at){
      updated_at = this.notesUpdatedDate(notes);
    }
    const title = this.props.notebook.title;
    
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
    const dayUpdated = updatedDate.getDate();
    const monthCreated = monthStr[createdDate.getMonth()];
    const dayCreated = createdDate.getDate();
    const updated = `${monthUpdated} ${dayUpdated}`;
    const created = `${monthCreated} ${dayCreated}`;
   

  return (
    <div onClick={this.showNotebook} className={`notebook-item`} key={id} to={`/notebooks/${id}`} updated={updated}>
      <ul className='notebook-item-list' key={id}>
        <li><Link to={`/notes/notebooks/${id}`} key={`${id}1`} className="nb-title"><img className="small-icon" src={window.notebook2Pic} alt=""/>{title} ({this.props.notes.length})</Link></li>
        <li key={`${id}2`} className="nb-createdby">{this.props.author}</li>
        <li key={`${id}4`} className="nb-updated">{updated}</li>
        <li key={`${id}3`} className="nb-created">{created}</li>
        
        <li key={`${id}5`} className="nb-actions">
          <NotebookActions 
            id={id}
            showEditModal={this.props.showEditModal}
          />
        </li>
      </ul>
    </div>
  );
  }
};

export default connect(msp, mdp)(NotebookIndexItem);