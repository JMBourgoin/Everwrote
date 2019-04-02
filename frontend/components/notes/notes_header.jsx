import React from 'react';
import { Link } from 'react-router-dom';
import NotebooksSortingMenu from '../menus/notebooks_sorting_container';


class NotesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.titleClick = this.titleClick.bind(this);
    this.updatedClick = this.updatedClick.bind(this);
    this.createdClick = this.createdClick.bind(this);
  }

  titleClick(e) {
    e.preventDefault();
    this.props.changeState('title');
  }

  updatedClick(e) {
    e.preventDefault();
    this.props.changeState('updated');
  }

  createdClick(e) {
    e.preventDefault();
    this.props.changeState('created');
  }

  

  render() {
    const noteCount = Object.values(this.props.notes).length;
    this
    return (
      <div className="notes-idx-header-outer">
        <div className="notes-idx-header">
          <h3>{this.props.header}</h3>
          <div className="notes-idx-sub-header">
            <p>{noteCount} notes</p>
            <div>
              <div>
                <NotebooksSortingMenu
                  notes={this.props.notes}
                  titleClick={this.titleClick}
                  updatedClick={this.updatedClick}
                  createdClick={this.createdClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    
  }
}

export default NotesHeader;