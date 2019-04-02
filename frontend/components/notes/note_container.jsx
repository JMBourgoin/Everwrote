import React from 'react';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill'; 

const msp = state => {
  return ({

  });
};

const mdp = dispatch => {
  return ({

  });
};


class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    return (
      <div className="note-outer-container">
        <div className="quil-container">
          <ReactQuill 
          value={this.state.text}
          onChange={this.handleChange} 
          theme="snow"
          >
            <div className="my-editing-area">
            </div>
      
          </ReactQuill>
        </div>
        <button>Save</button>
      </div>
    )
  }
}


export default connect(msp, mdp)(NoteContainer);