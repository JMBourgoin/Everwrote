import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';



class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: this.props.oldNote.body,
      title: this.props.oldNote.title,
   };
    
    this.handleBody = this.handleBody.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchAllNotes();
    if(this.props.noteId !== null){

      this.setState({
        body: this.props.oldNote.body,
        title: this.props.oldNote.title
      });
    }
  }
componentDidUpdate(prevProps){
  if(this.props.match.params.noteId !== prevProps.match.params.noteId){
    this.props.fetchAllNotes();
    if (this.props.noteId !== null) {

      this.setState({
        body: this.props.oldNote.body,
        title: this.props.oldNote.title
      });
    }
  }
}

  handleTitle(e){
    this.setState({
      title: e.target.value,
    });
  }
  
  handleBody(value) {
   this.setState({
     body: value,
   });
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteNote(this.props.noteId);
    this.props.history.push(`/notes/notebooks/${this.props.match.params.notebookId}`)

  }

  handleSave(e){
    e.preventDefault();
    
    const newNote = {
      title: this.state.title,
      body: this.state.body,
      notebook_id: this.props.oldNote.notebookId,
      author_id: this.props.oldNote.authorId
    };
    
    if(this.props.noteId === null){
      this.props.createNote(newNote);
    } else {
      let updatedNote = merge({}, this.props.oldNote, newNote);
      this.props.updateNote(updatedNote);
      debugger
      this.props.history.push(`/notes/notebooks/${this.props.match.params.notebookId}`)
    }
  }

  render() {

    const modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ],
    };

    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];

    
    return (
      <div 
      className="note-outer-container"
  
      >
        <div className="note-title">
          <input className="header-input" type="text" value={this.state.title} onChange={this.handleTitle}/>
        </div>
        <div>
        </div>
        <div className="quil-container">
          <ReactQuill 
          value={this.state.body}
          onChange={this.handleBody} 
          theme="snow"
          modules={modules}
          formats={formats}
          />
        </div>
        <button
          className="note-save-button save2"
          onClick={this.handleSave}
        >Save note
        </button>
        <button
          className={this.props.klass}
          onClick={this.handleDelete}
        >Delete
        </button>
      </div>
    )
  }
}


export default NoteContainer;