import React from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
import { createNote, updateNote } from '../../actions/notes';
import { merge } from 'lodash';

const msp = (state, ownProps) => {
  let body = "Add note body";
  let title = "Add note title";
  let id = null;
  let notebook_id = parseInt(ownProps.location.pathname.substr(-1));
  let author_id = state.session.currentUserId;
  let oldNote = null;

  if(ownProps.match.params.noteId === undefined){
    id = null;
  } else {
    id = ownProps.match.params.noteId;
  }

  if(ownProps.match.params.noteId){
    body = state.entities.notes[id].body;
    title = state.entities.notes[id].title;
    oldNote = state.entities.notes[id];
  } 
    
  return ({
    body,
    title,
    notebook_id,
    author_id,
    id,
    oldNote
  });
};

const mdp = dispatch => {
  return ({
    createNote: note => dispatch(createNote(note)),
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: id => dispatch(deleteNote(id))
  });
};


class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: this.props.body,
      title: this.props.title,
   };
    this.handleBody = this.handleBody.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
  }

  handleTitle(value){
    this.setState({
      title: value,
    });
  }

  handleBody(value) {
   this.setState({
     body: value,
   });
  }

  handleSave(e){
    e.preventDefault();
    const newNote = {
      
      title: this.state.title,
      body: this.state.body,
      notebook_id: this.props.notebook_id,
      author_id: this.props.author_id

    };

    if(this.props.id === null){
      this.props.createNote(newNote);
    } else {
      let updatedNote = merge({}, this.props.oldNote, newNote);
      this.props.updateNote(updatedNote);
    }
  }

  render() {

    return (
      <div className="note-outer-container">
        <div className="note-title">
          <input className="header-input" type="text" value={this.state.title} onChange={this.handleTitle}/>
        </div>
        <div className="quil-container">
          <ReactQuill 
          value={this.state.body}
          onChange={this.handleChange} 
          theme="snow"
          />
        </div>
        <button
          className="note-save-button"
          onClick={this.handleSave}
          >Save
        </button>
      </div>
    )
  }
}


export default connect(msp, mdp)(NoteContainer);