import { connect } from 'react-redux';
import { fetchAllNotes, updateNote, deleteNote, fetchNote, clearErrors } from '../../actions/notes';
import { fetchAllTags, fetchAllJoins, deleteJoin } from '../../actions/tags';
import NoteContainer from './note_container';


const msp = (state, ownProps) => {
  const notebookId = parseInt(ownProps.match.params.notebookId);
  const authorId = state.session.currentUserId;
  const noteId = parseInt(ownProps.match.params.noteId);
  
  const joins = Object.values(state.joins);
  const filteredJoins = joins.filter(join => { return join.note_id === noteId});
  
  let tagIdsArr = [];
  filteredJoins.forEach(join => tagIdsArr.push(join.tag_id));
    
  let allTags = [];
  if(state.entities.tags !== undefined){
    allTags = Object.values(state.entities.tags);
  }
  const filteredTags = allTags.filter(tag => {return tagIdsArr.includes(tag.id)})
  
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
  }
  
  return ({
    notebookId,
    authorId,
    noteId,
    oldNote: note,
    klass: "active",
    filteredTags,
    joins
  });
};

const mdp = dispatch => {
  return ({
    updateNote: note => dispatch(updateNote(note)),
    deleteNote: id => dispatch(deleteNote(id)),
    fetchNote: id => dispatch(fetchNote(id)),
    fetchAllNotes: ()=> dispatch(fetchAllNotes()),
    clearErrors: () => dispatch(clearErrors()),
    fetchAllTags: () => dispatch(fetchAllTags()),
    fetchAllJoins: () => dispatch(fetchAllJoins()),
    deleteJoin: join => dispatch(deleteJoin(join))
  });
};

export default connect(msp, mdp)(NoteContainer);