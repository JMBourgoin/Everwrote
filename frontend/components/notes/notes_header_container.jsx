import React from 'react';
import { connect } from 'react-redux';
import NotesHeader from './notes_header';

const msp = (state, ownProps) => {
  return ({
    header: "All Notes",
  });
};

const mdp = dispatch => {
  return ({

  });
};

export default connect(msp, mdp)(NotesHeader);