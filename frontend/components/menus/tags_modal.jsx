import React from 'react';
import { merge } from 'lodash';

class TagModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      name: this.props.name,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    let tag = tag;
    if(this.props.tag === undefined){
       tag = {
          name: this.state.name,
          author_id: this.props.author_id
      };
    } else {
      tag = merge({}, this.props.tag, {name: this.state.name});
    }
    debugger
    this.props.submitAction(tag);
    this.setState({name: ""});
    this.props.closeModal();
  }

  inputHandle(e){
    return e => {
      this.setState({name: e.target.value});
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
              <p className="sub-head-modal">Tags are useful for viewing notes around a common topic.</p>
            <div className="notebook-modal-form">
              <form id="nb-submit-button" onSubmit={this.handleSubmit} className="notebook-modal-form">
                <p>Name</p>
                <input className="notebook-modal-form-input" value={this.state.name} onChange={this.inputHandle()} type="text"/>
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

export default TagModal;