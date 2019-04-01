import { connect } from 'react-redux';
import React from 'react';
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
  });
};

class NotebooksContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortBy: 'created',
    };
  
    this.sortByCreated = this.sortByCreated.bind(this);
    this.sortByUpdated = this.sortByUpdated.bind(this);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllNotebooks();
  }

  changeState(sort){
    this.setState({sortBy: sort})
  }

  sortByCreated(arr){
    let newArr = arr.concat([]);
    return (
        newArr.sort(function (a, b) {
          return ((new Date(b.created_at)) < (new Date(a.created_at)) ? -1 : 1);       return (new Date(b.created_at) - new Date(a.created_at));
      })
    );
  };

  sortByUpdated(arr) {
    let newArr = arr.concat([]);
     return (
      newArr.sort(function (a, b) {
       return ((new Date(b.updated_at)) < (new Date(a.updated_at)) ? -1 : 1);
      })
    );
  };

  sortByTitle(arr) { 
    let newArr = arr.concat([]);
    return (
      newArr.sort((a, b) => {
       return (a.title[0] < b.title[0] ? -1 : 1);
     })
    );
  }
  
  render(){
    const notebooksArr = Object.values(this.props.notebooks);
    let sortedNotebooks = [];
    
    if(this.state.sortBy === 'title') {
      sortedNotebooks = this.sortByTitle(notebooksArr);
    } else if (this.state.sortBy === 'updated') {
      sortedNotebooks = this.sortByUpdated(notebooksArr)
    } else if (this.state.sortBy === 'created') {
      sortedNotebooks = this.sortByCreated(notebooksArr);
    }
    
    const notebooks = sortedNotebooks.map(notebook => {
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
        <NotebookHeader 
          setIndexState={this.setIndexState}
          sortByTitle={this.sortByTitle}
          sortByUpdated={this.sortByUpdate}
          sortByCreated={this.sortByCreated}
          changeState={this.changeState}
        />
        <ul>
          { notebooks }
        </ul>
      </div>
      
    )
  };
}

export default connect(msp, mdp)(NotebooksContainer);
