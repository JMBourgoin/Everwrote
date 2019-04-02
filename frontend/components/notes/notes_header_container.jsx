import React from 'react';
import { connect } from 'react-redux';
import NotesHeader from './notes_header';

const msp = (state, ownProps) => {
  const header = ownProps.header;
  return ({
    header,
  });
};

const mdp = dispatch => {
  return ({

  });
};

export default connect(msp, mdp)(NotesHeader);