import { connect } from 'react-redux';
import React from 'react';
import { logoutUser } from '../../actions/session';
import { fetchAllNotebooks, fetchNotebook, createNotebook, updateNotebook, deleteNotebook } from '../../actions/notebooks';
import NotebookIndexItem from './notebooks_index_item';

const msp = state => {
  let userId = state.session.currentUserId;
  let userEmail = state.entities.users[userId].email;

  return ({
    userEmail,
  });
};

const mdp = dispatch => {
  return ({
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    createNotebook: notebook => dispatch(createNotebook(notebook)),
    updateNotebook: notebook => dispatch(updateNotebook(notebook)),
    deleteNotebook: id => dispatch(deleteNotebook(id)),
    logoutUser: () => dispatch(logoutUser()),

  });
};

class NotebooksContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.logoutClick = this.logoutClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllNotebooks();
  }

  logoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }
  
  render(){
    debugger
    
    return (
      <div>
        <button onClick={this.logoutClick}>Log out</button>
      </div>
      
    )
  };
}

export default connect(msp, mdp)(NotebooksContainer);
