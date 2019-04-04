import { connect } from 'react-redux';
import { fetchAllNotes, createNote, updateNote } from '../../actions/notes';
import NoteContainer from './note_container';


const msp = (state, ownProps) => {
  let body = "Add note body";
  let title = "Add note title";
  let noteId = null;
  let notebookId = parseInt(ownProps.match.params.notebookId);
  let authorId = state.session.currentUserId;
  let oldNote = {
    body,
    title,
    notebookId,
    authorId,
  };

  return ({
    oldNote,
    noteId,
    klass: "nonactive"
  });
};

const mdp = dispatch => {
  return ({
    createNote: note => dispatch(createNote(note)),
    deleteNote: id => dispatch(deleteNote(id)),
    fetchAllNotes: () => dispatch(fetchAllNotes())
  });
};

export default connect(msp, mdp)(NoteContainer);