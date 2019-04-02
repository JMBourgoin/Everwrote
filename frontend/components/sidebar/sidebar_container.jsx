import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllNotebooks } from '../../actions/notebooks';
import { logoutUser } from "../../actions/session";


const msp = state => {
  const email = state.entities.users[state.session.currentUserId].email;
  const notebooks = state.entities.notebooks
  return ({
    email,
    notebooks
  })
}

const mdp = dispatch => {
  return {
    fetchAllNotebooks: () => dispatch(fetchAllNotebooks()),
    logoutUser: () => dispatch(logoutUser()),
  };
};

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.logoutClick = this.logoutClick.bind(this);
  }
  componentDidMount(){
    this.props.fetchAllNotebooks();
  }

  logoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  
  openMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true });
    document.addEventListener('click', this.closeMenu);
  }

  closeMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: false });
    document.removeEventListener('click', this.closeMenu);
  }


  render(){
    let notebooks = Object.values(this.props.notebooks);
    let nbButtons = notebooks.map(notebook =>{
      return (
        <Link
        key ={notebook.id}
        to={`/notes/notebooks/${notebook.id}`} 
        className="sidebar-small"
        >
        <img src={window.notebook2Pic} alt="Notes-icon" />
        <p>{notebook.title}</p>
        </Link>
      )
    })
    return (
      <div className="sidebar-outer-container">
        <div className="sidebar-container">
          <div className="profile-container">
            <button className="profile">
              <img src={window.logoPic} alt="user-profile" />
              <p>{this.props.email}</p>
            </button>
          </div>
          <button className="add-note">
            <img src={window.newNote} alt="new-note-icon" />
            <h2>New Note</h2>
          </button>
          <ul className="sidebar-list-ul">
            <li>
              <Link to={"/notes"} className="sidebar-list">
                <img src={window.notePic} alt="note-icon" />
                <h3>All Notes</h3>
              </Link>
            </li>
            <li>
              <button
                onClick={this.openMenu}
                className="sidebar-list sidebar-button"
              >
                <img src={window.notebook2Pic} alt="Notes-icon" />
                <h3>Notebooks</h3>
              </button>
              {this.state.showMenu ? (
                <div className="notebooks-sidebar-menu">{nbButtons}</div>
                ) : null}
            </li>
            <li>
              <Link to={"/notebooks"} className="sidebar-list">
                <img src={window.tagPic} alt="tags-icon" />
                <h3>Tags</h3>
              </Link>
            </li>
          </ul>
          <button className="side-logout" onClick={this.logoutClick}>Log out</button>
        </div>
      </div>
    );
  }
}

export default connect(msp, mdp)(SidebarContainer);