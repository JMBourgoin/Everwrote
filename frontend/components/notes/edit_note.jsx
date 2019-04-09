import { connect } from 'react-redux';
import { fetchAllNotes, updateNote, deleteNote, fetchNote, clearErrors } from '../../actions/notes';
import NoteContainer from './note_container';


const msp = (state, ownProps) => {
  let notebookId = parseInt(ownProps.match.params.notebookId);
  let authorId = state.session.currentUserId;
  let noteId = parseInt(ownProps.match.params.noteId);
  let body = "Add Note Body";
  let title = "Add Note Title";
  
  let note = {
    body,
    title,
    notebookId,
    authorId,
  };

  if(state.entities.notes[noteId] !== undefined){
    note = state.entities.notes[noteId];
    debugger
  }
  
  return ({
    notebookId,
    authorId,
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
    fetchAllNotes: ()=> dispatch(fetchAllNotes()),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(msp, mdp)(NoteContainer);