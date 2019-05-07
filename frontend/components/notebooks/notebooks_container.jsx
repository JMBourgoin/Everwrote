import { connect } from 'react-redux';
import React from 'react';
import { fetchAllNotebooks, fetchNotebook, clearErrors } from '../../actions/notebooks';
import { fetchAllNotes } from '../../actions/notes';
import NotebookIndexItem from './notebooks_index_item';
import NotebookHeader from './notebooks_header_container';
import AddNotebook from '../menus/new_notebook_container';
import EditNotebook from '../menus/edit_notebook_container';

const msp = state => {    
  const userId = state.session.currentUserId;
  const userEmail = state.entities.users[userId].email;
  const notebooks = state.entities.notebooks;

  return ({
    userEmail,
    userId,
    notebooks,
    
  });
};

const mdp = dispatch => {
  return ({
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    fetchNotebook: id => dispatch(fetchNotebook(id)),
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    clearErrors: () => dispatch(clearErrors())
  });
};

class NotebooksContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortBy: 'updated',
      showAddModal: false,
      showEditModal: false,
      notebook: "",
      updatedNotesCollection: {},
      updatedNotebookOrder: []
    };

    this.sortByCreated = this.sortByCreated.bind(this);
    this.sortByUpdated = this.sortByUpdated.bind(this);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.changeState = this.changeState.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.showEditModal = this.showEditModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  mapUpdatedNoteToNotebook(notes){
    const collection = {};
    Object.values(notes.notes).forEach(note => {
      if(note.notebook_id in collection){
        collection[note.notebook_id].push(note);
        collection[note.notebook_id] = 
          collection[note.notebook_id][0].updated_at > collection[note.notebook_id][1].updated_at ? [ collection[note.notebook_id][0] ] : [ collection[note.notebook_id][1] ];
      } else {
        collection[note.notebook_id] = [ note ];
      }
    });
    const collectionArr = Object.values(collection).sort((a, b) => {new Date(b[0].updated_at) - new Date(a[0].updated_at)});
    const sortedNotebookIds = collectionArr.map(note => { return note[0].notebook_id });
    this.setState({
      updatedNotebookOrder: sortedNotebookIds,
      updatedNotesCollection: collection,
    });
  }

  componentDidMount(){
    this.props.fetchAllNotebooks();
    this.props.fetchAllNotes().then(notes => this.mapUpdatedNoteToNotebook(notes));
  }

  changeState(sort){
    this.setState({sortBy: sort})
  }

  sortByCreated(arr){
    let newArr = arr.concat([]);
    return (
        newArr.sort(function (a, b) {
          return ((new Date(b.created_at)) < (new Date(a.created_at)) ? -1 : 1);       
      })
    );
  };

  sortByUpdated(arr) {
    let tempArr = arr.concat([]);
    const collection = this.state.updatedNotesCollection;
    const order = this.state.updatedNotebookOrder;
    const newArr = tempArr.concat([]);
    tempArr.forEach((notebook, index) => {

      if(order.includes(notebook.id)){
        newArr[index].updated_at = collection[notebook.id][0].updated_at;
      }
    });
    let sortedNotebooks = newArr.sort(function (a, b) {
      return ((new Date(b.updated_at)) < (new Date(a.updated_at)) ? -1 : 1);
    });
      return sortedNotebooks;
  };

  sortByTitle(arr) { 
    let newArr = arr.concat([]);
    return (
      newArr.sort((a, b) => {
       return (a.title[0].toUpperCase() < b.title[0].toUpperCase() ? -1 : 1);
     })
    );
  }

  closeModal(e){
    this.setState({showEditModal: false, showAddModal: false});
  }

  showAddModal(e){
    e.preventDefault();
    this.setState({showAddModal: true, showEditModal: false });
  }

  showEditModal(notebook) {
    this.setState({ showEditModal: true, showAddModal: false, notebook: notebook, });
  }
  
  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((error, index) => (
          <li key={`${index}`}>{error}</li>
        ))}
      </ul>
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
          key={notebook.id}
          showEditModal={this.showEditModal}
          />
      )
    });
    return (
      <div className="notebooks-container">
        {
          this.state.showAddModal ?
          (
            <AddNotebook 
            closeModal={this.closeModal}
            />
          ) :
          (null)
          }
        {
          this.state.showEditModal ?
            (
              <EditNotebook
                notebook={this.state.notebook}
                closeModal={this.closeModal}
              />
            ) :
            (null)
        }
        <NotebookHeader 
          setIndexState={this.setIndexState}
          sortByTitle={this.sortByTitle}
          sortByUpdated={this.sortByUpdate}
          sortByCreated={this.sortByCreated}
          changeState={this.changeState}
          showAddModal={this.showAddModal}
        />
        <ul>
          { notebooks }
        </ul>
      </div>
      
    )
  };
}

export default connect(msp, mdp)(NotebooksContainer);
