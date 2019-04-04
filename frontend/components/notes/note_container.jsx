import React from 'react';
import ReactQuill from 'react-quill';
import { merge } from 'lodash';




class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: this.props.body,
      title: this.props.title,
   };
    
    this.handleBody = this.handleBody.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSave = this.handleSave.bind(this);
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

  handleSave(e){
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      body: this.state.body,
      notebook_id: this.props.notebook_id,
      author_id: this.props.author_id
    };

    if(this.props.noteId === null){
      this.props.createNote(newNote);
    } else {
      let updatedNote = merge({}, this.state.oldNote, newNote);
      this.props.updateNote(updatedNote);
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
      key={this.props.history.listen()}
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
      </div>
    )
  }
}


export default NoteContainer;