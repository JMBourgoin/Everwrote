import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import TagsMenu from '../menus/tags_menu_container';
import { merge } from 'lodash';
import { Delta } from 'quill';



class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      body: "Add Note Body",
      title: "Add Note Title",
      tags: []
   };
    
    this.handleBody = this.handleBody.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.handleBodyValue = this.handleBodyValue.bind(this);
  }
  
  componentDidMount(prevProps, prevState){
    this.props.fetchAllNotes().then(this.props.fetchAllTags()).then(this.props.fetchAllJoins());

    if(this.props.noteId !== null){
      this.setState({
        body: this.props.oldNote.body,
        title: this.props.oldNote.title
      });
    }
  }


componentDidUpdate(prevProps, prevState){
  if(this.props.match.params.noteId !== prevProps.match.params.noteId){
    this.props.fetchAllNotes().then(() => {
        if (this.props.noteId !== null) {
          this.setState({
            body: this.props.oldNote.body,
            title: this.props.oldNote.title
          });
        }
      }
    );
  }
}

  handleTitle(e){
    this.setState({
      title: e.target.value,
    });
  }
  
  // handleBody(content, delta, source, editor) {
  //   let value = editor.getContents();
  //   debugger
  //   this.setState({
  //    body: value,
  //  });
  // }
  handleBodyValue(content, delta, source, editor){
    content = this.state.body;
    const value = content;
    return value;
  }

  handleBody(value) {
    this.setState({
     body: value,
   });
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteNote(this.props.noteId);
    this.props.history.push(`/notes/notebooks/${this.props.match.params.notebookId}`);
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
      this.setState({body: "Add note body", title: "Add note title"});
    } else {
      let updatedNote = merge({}, this.props.oldNote, newNote);
      this.props.updateNote(updatedNote);
      this.props.history.push(`/notes/notebooks/${this.props.match.params.notebookId}`)
    }
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

  render() {
    const modules = {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, false] }],
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

    const tags = this.props.filteredTags.map(tag => {
      return (
        <li key={tag.id}>
          <button className="note-tag-button">{tag.name}</button>
        </li>
      )
    })
    
    return (
      <div 
      className="note-outer-container"
      >
        <ul className="note-tags-list">
          { tags }
        </ul>

        <div className="note-title">
          <input 
          className="header-input" 
          type="text" value={this.state.title} 
          onChange={this.handleTitle}
          />
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
        <div className="note-bottom-container">
          <div className="note-buttons-container">
            <button
              className="note-save-button save2"
              onClick={this.handleSave}
            >Save
            </button>
            <button
              className={this.props.klass}
              onClick={this.handleDelete}
            >Delete
            </button>
          </div>
            <TagsMenu 
            noteId={this.props.noteId}
            />
        </div>
      </div>
    )
  }
}


export default NoteContainer;