import { connect } from 'react-redux';
import { fetchAllNotes, createNote, updateNote, clearErrors } from '../../actions/notes';
import { fetchAllTags, fetchAllJoins, deleteTag } from '../../actions/tags';
import NoteContainer from './note_container';


const msp = (state, ownProps) => {
  let tags = state.tags;
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
    klass: "nonactive",
    filteredTags: []
  });
};

const mdp = dispatch => {
  return ({
    createNote: note => dispatch(createNote(note)),
    deleteNote: id => dispatch(deleteNote(id)),
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchAllTags: ()=> dispatch(fetchAllTags()),
    fetchAllJoins: () => dispatch(fetchAllJoins()),
    deleteJoin: join => dispatch(deleteJoin(join)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(msp, mdp)(NoteContainer);