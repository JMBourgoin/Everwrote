import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotebookActions from '../menus/notebooks_action_container';

const msp = (state, ownProps) => {
  let id = ownProps.id;
  let notebook = state.entities.notebooks[id];
  let author = state.entities.users[notebook.author_id].email;
  return({
    notebook,
    author
  });
};

const mdp = dispatch => {
  return ({

  });
};

 class NotebookIndexItem extends React.Component {

  constructor(props){
    super(props);
  }
  
  showNotebook(){
    
  }
  render (){
    
    const author_id = this.props.notebook.author_id;
    const id = this.props.notebook.id;
    const created_at = this.props.notebook.created_at;
    const updated_at = this.props.notebook.updated_at;
    const title = this.props.notebook.title;
    
    const monthStr = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];


  //  const createdDateStr = JSON.parse(created_at); 
  //  const updatedDateStr = JSON.parse(updated_at);
  //  const updatedDate = new Date(updatedDateStr);
    const createdDate = new Date(created_at);
    const updatedDate = new Date(updated_at);
    const monthUpdated = monthStr[updatedDate.getMonth()];
    const dayCreated = createdDate.getDate();
   const monthCreated = monthStr[createdDate.getMonth()];
   const dayUpdated = updatedDate.getDate();
    const updated = `${monthUpdated} ${dayUpdated}`;
   const created = `${monthCreated} ${dayCreated}`;
   

  return (
    <div onClick={this.showNotebook} className={`notebook-item`} key={id} to={`/notebooks/${id}`}>
      <ul className='notebook-item-list' key={id}>
        <li><button onClick={this.showNotes} key={`${id}1`} className="nb-title"><img className="small-icon" src={window.notebook2Pic} alt=""/>{title}</button></li>
        <li key={`${id}2`} className="nb-createdby">{this.props.author}</li>
        <li key={`${id}3`} className="nb-created">{created}</li>
        <li key={`${id}4`} className="nb-updated">{updated}</li>
        
        <li key={`${id}5`} className="nb-actions">
          <NotebookActions 
            id={id}
          />
        </li>
      </ul>
    </div>
  );
  }
};

export default connect(msp, mdp)(NotebookIndexItem);