import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NotebookActions from '../menus/notebooks_action_container';

const msp = state => {
  return({

  });
};

const mdp = dispatch => {
  return ({

  });
};

 class NotebookIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.myToggle = this.myToggle.bind(this);
  }
  myToggle(){
    document.getElementById("nb-dropdown").classList.toggle("show");
  }
  showNotebook(){
    
  }
  render (){
    
    const author_id = this.props.author_id;
    const id = this.props.id;
    const created_at = this.props.created_at;
    const updated_at = this.props.updated_at;
    const title = this.props.title;
    
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
    const dayCreated = createdDate.getDay();
   const monthCreated = monthStr[createdDate.getMonth()];
   const dayUpdated = updatedDate.getDay();
    const updated = `${monthUpdated} ${dayUpdated}`;
   const created = `${monthCreated} ${dayCreated}`;
   

  return (
    <div onClick={this.showNotebook} className={`notebook-item`} key={id} to={`/notebooks/${id}`}>
      <ul className={`notebook-item-list`} key={id}>
        <li key={`${id}1`} className="nb-title">{title}</li>
        <li key={`${id}2`} className="nb-createdby">{author_id}</li>
        <li key={`${id}3`} className="nb-created">{created}</li>
        <li key={`${id}4`} className="nb-updated">{updated}</li>
        
        <li key={`${id}5`} className="nb-actions">
          <NotebookActions onClick={this.myToggle}/>
        </li>
      </ul>
    </div>
  );
  }
};

export default connect(msp, mdp)(NotebookIndexItem);