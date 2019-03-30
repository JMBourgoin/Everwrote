import { connect } from 'react-redux';
import React from 'react';
import { logoutUser } from '../../actions/session';
import { fetchAllNotebooks, fetchNotebook } from '../../actions/notebooks';
import NotebookIndexItem from './notebooks_index_item';
import NotebookHeader from './notebooks_header_container';

const msp = state => {    
  const userId = state.session.currentUserId;
  const userEmail = state.entities.users[userId].email;
  const notebooks = state.entities.notebooks;

  return ({
    userEmail,
    userId,
    notebooks
  });
};

const mdp = dispatch => {
  return ({
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchNotebook: id => dispatch(fetchNotebook(id)),
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
    const notebooksArr = Object.values(this.props.notebooks);
    const notebooks = notebooksArr.map(notebook => {
      return (
         <NotebookIndexItem 
          id={notebook.id} 
          author_id={this.props.userEmail} 
          created_at={notebook.created_at}
          updated_at={notebook.updated_at}
          title={notebook.title}
          key={notebook.id}
          />
      )
    });
    
    return (
      <div className="notebooks-container">
        <NotebookHeader />
        <ul>
          { notebooks }
        </ul>
        <button onClick={this.logoutClick}>Log out</button>
      </div>
      
    )
  };
}

export default connect(msp, mdp)(NotebooksContainer);
