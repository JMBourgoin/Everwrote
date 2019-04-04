import { connect } from 'react-redux';
import { fetchAllNotes, updateNote, deleteNote, fetchNote } from '../../actions/notes';
import NoteContainer from './note_container';


const msp = (state, ownProps) => {
  let notebook_id = parseInt(ownProps.match.params.notebookId);
  let author_id = state.session.currentUserId;
  let noteId = parseInt(ownProps.match.params.noteId);
  let title = "title";
  let body = "body";
  let note = "";

  if(state.entities.notes[noteId] !== undefined){
    title = state.entities.notes[noteId].title;
     body = state.entities.notes[noteId].body;
     note = state.entities.notes[noteId];
  }
  
  return ({
    body,
    title,
    notebook_id,
    author_id,
    noteId,
    oldNote: note,
    klass: "active"
  });
};

const mdp = dispatch => {
  return ({
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: id => dispatch(deleteNote(id)),
    fetchNote: id => dispatch(fetchNote(id)),
    fetchAllNotes: ()=> dispatch(fetchAllNotes())
  });
};

export default connect(msp, mdp)(NoteContainer);