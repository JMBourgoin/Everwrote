import React from 'react';
import { connect } from 'react-redux';
import { fetchAllNotes, fetchNote } from '../../actions/notes';
import { fetchAllNotebooks } from '../../actions/notebooks';
import NotesIndex from './notes_index';


const msp = state => {
  const notes = Object.values(state.entities.notes);
  const tags = state.entities.tags;
  const author = state.entities.users[state.session.currentUserId];
  return ({
    notes,
    tags,
    author,
    header: "All Notes"
  });
};

const mdp = dispatch => {
  return ({
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchNote: id => dispatch(fetchNote(id)),
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
  });
};

export default connect(msp, mdp)(NotesIndex);