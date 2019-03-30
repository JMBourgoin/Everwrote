import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const msp = state => {
  const email = state.entities.users[state.session.currentUserId].email;
  return ({
    email
  })
}
class SidebarContainer extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
   
    return (
      <div className="sidebar-outer-container">
        <div className="sidebar-container">
          
          <Link to={'/notebooks'} className="profile">
            <img src={window.logoPic} alt="user-profile"/>
            <p>{this.props.email}</p>
          </Link>
          <Link to={'/notebooks'} className="add-note">
            <img src={window.newNote} alt="new-note-icon" />
            <h2>New Note</h2>
          </Link>
          <ul className="sidebar-list-ul">
            <li>
              <Link to={'/notebooks'} className="sidebar-list">
                <img src={window.notePic} alt="note-icon" />
                <h3>All Notes</h3>
              </Link>
            </li>
            <li>
              <Link to={'/notebooks'} className="sidebar-list">
                <img src={window.notebook2Pic} alt="Notes-icon" />
                <h3>Notebooks</h3>
              </Link>
            </li>
            <li>
              <Link to={'/notebooks'} className="sidebar-list">
                <img src={window.tagPic} alt="Notebooks-icon" />
                <h3>Tags</h3>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default connect(msp)(SidebarContainer);