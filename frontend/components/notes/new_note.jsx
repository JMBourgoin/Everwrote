import { connect } from 'react-redux';
import { fetchAllNotes, createNote, updateNote } from '../../actions/notes';
import NoteContainer from './note_container';


const msp = (state, ownProps) => {
  let body = "Add note body";
  let title = "Add note title";
  let noteId = null;
  let notebook_id = parseInt(ownProps.location.pathname.substr(-1));
  let author_id = state.session.currentUserId;
  let oldNote = null;

  return ({
    body,
    title,
    notebook_id,
    author_id,
    noteId,
    oldNote
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