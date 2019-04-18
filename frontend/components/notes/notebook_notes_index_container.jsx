import { connect } from 'react-redux';
import { fetchAllNotes, fetchNote } from '../../actions/notes';
import { fetchAllNotebooks } from '../../actions/notebooks';
import NotesIndex from './notes_index';


const msp = (state, ownProps) => {
  const notebookId = ownProps.match.params.notebookId;
  const notebook = state.entities.notebooks[notebookId];
  const allNotes = state.entities.notes;
  const joins = Object.values(state.joins);
  let header = null;
  
  if(notebook === undefined){
    header = "Untitled Notebook";
  } else {
    header = notebook.title;
  }

  const notes = Object.values(allNotes).filter(note =>{
    return note.notebook_id === parseInt(notebookId);
  });
  const tags = state.entities.tags;
  const author = state.entities.users[state.session.currentUserId];
  
  
  return ({
    notebook,
    notes,
    tags,
    author,
    notebookId,
    header,
    joins
  });
};

const mdp = dispatch => {
  return ({
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchNote: id => dispatch(fetchNote(id))
  });
};

export default connect(msp, mdp)(NotesIndex);