import React from 'react';
import { connect } from 'react-redux';

const msp = state => {
  return ({

  });
};

const mdp = dispatch => {
  return ({

  });
};


class NoteContainer extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="note-outer-container">
        NOTE
      </div>
    )
  }
}

export default connect(msp, mdp)(NoteContainer);