import React from 'react';
import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebooks';
import { NotebooksContainer } from '../notebooks/notebooks_container';

const msp = (state, ownProps) => {
  let author_id = state.session.currentUserId;
  let closeModal = ownProps.closeModal;
  return ({
    author_id,
    closeModal,
  });
};

const mdp = dispatch => {
  return ({
    createNotebook: notebook => dispatch(createNotebook(notebook)),
  });
};

class AddNotebook extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      title: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    const notebook = {
        title: this.state.title,
        author_id: this.props.author_id
    };

    this.props.createNotebook(notebook);
    this.setState({title: ""});
    this.props.closeModal();
  }

  inputHandle(){
    return e => {
      this.setState({title: e.target.value});
    };
  }

  render(){
    return(
      <div className="modal-outer-container">
        <div className="modal-background">
        </div>
          <div className="modal-form-container">
            <div className="modal-header-container">
                <h3 className="notebook-modal-header">Create new notebook</h3>
                <button onClick={this.props.closeModal} className="notebook-modal-close">X</button>
            </div>
              <p className="sub-head-modal">Notebooks are useful for grouping notes around a common topic.</p>
            <div className="notebook-modal-form">
              <form id="nb-submit-button" onSubmit={this.handleSubmit} className="notebook-modal-form">
                <p>Name</p>
                <input className="notebook-modal-form-input" placeholder="Notebook name" value={this.state.title} onChange={this.inputHandle()} type="text"/>
                <div className="modal-horizontal-line"></div>
                <div className="modal-buttons-container">
                  <input className="modal-button-continue" type="submit" value="Continue"/>
                  <button className="modal-button" onClick={this.props.closeModal}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
      </div>
    )
  }
}

export default connect(msp, mdp)(AddNotebook);