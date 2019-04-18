import React from 'react';
import { connect } from 'react-redux';
import { fetchAllNotes, fetchNote } from '../../actions/notes';
import { fetchAllNotebooks } from '../../actions/notebooks';
import NotesIndex from './notes_index';


const msp = (state, ownProps) => {
    const tagId = parseInt(ownProps.match.params.tagId);
    const AllNotes = Object.values(state.entities.notes);
    const tags = Object.values(state.entities.tags);
    const joins = Object.values(state.joins);
    const author = state.entities.users[state.session.currentUserId];
    let tagName = '';
    let filteredJoins = joins.filter(join =>{
        return join.tag_id === tagId;
    });
    
  if(tags.length > 0){
      tagName = state.entities.tags[tagId].name;
  }

  let notesIds = [];
  filteredJoins.forEach(join => {
    notesIds.push(join.note_id);
  })

  const notes = AllNotes.filter(note => {
    return notesIds.includes(note.id);
  })
  


  return ({
    notes,
    tags,
    joins,
    author,
    header: tagName
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