import React from 'react';
import { merge } from 'lodash';

class AddNotebook extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      title: this.props.title,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    let notebook = notebook;

    if(this.props.notebook === undefined){
       notebook = {
          title: this.state.title,
          author_id: this.props.author_id
      };
    } else {
      notebook = merge({}, this.props.notebook, {title: this.state.title});
    }

    this.props.submitAction(notebook);
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
                <h3 className="notebook-modal-header">{this.props.menuTitle}</h3>
                <button onClick={this.props.closeModal} className="notebook-modal-close">X</button>
            </div>
              <p className="sub-head-modal">Notebooks are useful for grouping notes around a common topic.</p>
            <div className="notebook-modal-form">
              <form id="nb-submit-button" onSubmit={this.handleSubmit} className="notebook-modal-form">
                <p>Name</p>
                <input className="notebook-modal-form-input" value={this.state.title} onChange={this.inputHandle()} type="text"/>
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

export default AddNotebook;