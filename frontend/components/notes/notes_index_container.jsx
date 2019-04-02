import React from 'react';
import { connect } from 'react-redux';
import { fetchAllNotes, fetchNote } from '../../actions/notes';
import NotesIndexItem from './notes_index_item';
import NotesHeader from './notes_header_container';

const msp = state => {
  const notes = state.entities.notes;
  const notebooks = state.entities.notebooks;
  const tags = state.entities.tags;
  const author = state.entities.users[state.session.currentUserId];
  return ({
    notes,
    notebooks,
    tags,
    author
  });
};

const mdp = dispatch => {
  return ({
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    fetchNote: id => dispatch(fetchNote(id))
  });
};

class NotesIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortBy: 'created',
    };
    this.changeState = this.changeState.bind(this);
    this.sortByCreated = this.sortByCreated.bind(this);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByUpdated = this.sortByUpdated.bind(this);
  }


  componentDidMount(){
    this.props.fetchAllNotes();
  }
  
  changeState(sort) {
    this.setState({ sortBy: sort })
  }

  sortByCreated(arr) {
    let newArr = arr.concat([]);
    return (
      newArr.sort(function (a, b) {
        return ((new Date(b.created_at)) < (new Date(a.created_at)) ? -1 : 1); return (new Date(b.created_at) - new Date(a.created_at));
      })
    );
  }


  sortByUpdated(arr) {
    let newArr = arr.concat([]);
    return (
      newArr.sort(function (a, b) {
        return ((new Date(b.updated_at)) < (new Date(a.updated_at)) ? -1 : 1);
      })
    );
  }


  sortByTitle(arr) {
    let newArr = arr.concat([]);
    return (
      newArr.sort((a, b) => {
        return (a.title[0].toUpperCase() < b.title[0].toUpperCase() ? -1 : 1);
      })
    );
  }

  render(){
    const notesArr = Object.values(this.props.notes);
    let sortedNotes = [];
    if (this.state.sortBy === 'title') {
      sortedNotes = this.sortByTitle(notesArr);
    } else if (this.state.sortBy === 'updated') {
      sortedNotes = this.sortByUpdated(notesArr)
    } else if (this.state.sortBy === 'created') {
      sortedNotes = this.sortByCreated(notesArr);
    }
    const notes = sortedNotes.map(note => {
      return (
        <NotesIndexItem 
              note={note}
              key={note.id}
            />
      )
    });

    return (
      <div className="notes-index-component">
        <NotesHeader 
          sortByTitle={this.sortByTitle}
          sortByUpdated={this.sortByUpdate}
          sortByCreated={this.sortByCreated}
          changeState={this.changeState}
          notes={this.props.notes}
  
        />
        <div className="notes-idx-outer-container">
          <div className="notes-idx-list-container">
            {notes}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(msp,mdp)(NotesIndex);