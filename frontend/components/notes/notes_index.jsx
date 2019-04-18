import React from 'react';
import NotesIndexItem from './notes_index_item';
import NotesHeader from './notes_header_container';


class NotesIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sortBy: 'created',
      sortTag: ''
    }

    this.changeState = this.changeState.bind(this);
    this.sortByCreated = this.sortByCreated.bind(this);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByUpdated = this.sortByUpdated.bind(this);
    this.sortByTag = this.sortByTag.bind(this);
  }


  componentDidMount(){
    this.props.fetchAllNotebooks().then(this.props.fetchAllNotes());
  }
  
  changeState(sort, tagId='') {
    this.setState({ 
      sortBy: sort,
      sortTag: tagId 
    });
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

  sortByTag(arr, tagId){
    let newArr = arr.concat([]);
    
    let filteredJoins = this.props.joins.filter(join=>{
      return join.tag_id === tagId;
    });
    
    let noteIds = [];
    filteredJoins.forEach(join => {
      noteIds.push(join.note_id);
    })
    
    let filteredNotes = newArr.filter(note => {
       return noteIds.includes(note.id);
    });
  
    return filteredNotes;
  }

  render(){
    const notesArr = this.props.notes;
    let sortedNotes = [];
    if (this.state.sortBy === 'title') {
      sortedNotes = this.sortByTitle(notesArr);
    } else if (this.state.sortBy === 'updated') {
      sortedNotes = this.sortByUpdated(notesArr)
    } else if (this.state.sortBy === 'created') {
      sortedNotes = this.sortByCreated(notesArr);
    } else if (this.state.sortBy === 'tag'){
      sortedNotes = this.sortByTag(notesArr, this.state.sortTag);
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
          sortByTag={this.sortByTag}
          changeState={this.changeState}
          notes={this.props.notes}
          tags={this.props.tags}
          header={this.props.header}
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

export default NotesIndex;