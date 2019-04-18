import React from 'react';
import { connect } from 'react-redux';
import NotesHeader from './notes_header';

const msp = (state, ownProps) => {
  const header = ownProps.header;
  const tags = Object.values(state.entities.tags);
  return ({
    header,
    tags
  });
};

const mdp = dispatch => {
  return ({

  });
};

export default connect(msp, mdp)(NotesHeader);