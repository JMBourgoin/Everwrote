import { connect } from 'react-redux';
import React from 'react';
import { logoutUser } from '../../actions/session';



const mdp = dispatch => {
  return ({
    logoutUser: () => dispatch(logoutUser()),
  });
};

class NotebooksContainer extends React.Component {
  
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }
  
  render(){
    return (
      <div>
        <button onClick={this.handleClick}>Log out</button>
      </div>
      
    )
  };
}

export default connect(null, mdp)(NotebooksContainer);
