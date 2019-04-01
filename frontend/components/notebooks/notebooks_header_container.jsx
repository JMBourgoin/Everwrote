import React from 'react';
import { Link } from 'react-router-dom';
import NotebooksSortingMenu from '../menus/notebooks_sorting_container';


class NotebookHeader extends React.Component {
  constructor(props){
    super(props);
    this.titleClick = this.titleClick.bind(this);
    this.updatedClick = this.updatedClick.bind(this);
    this.createdClick = this.createdClick.bind(this);
  }
  
  titleClick(e){
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

  render(){
    
    return (
      <div className="nb-header">
        <h3 className="nb-header-head">Notebooks</h3>
        <div className="nb-header-sub">
          <h6>My notebook list</h6>
          <div className="nb-header-sub-right">
            <div className="nb-header-notebook">
              <button onClick={this.props.showModal}>
                <img src={window.notebookPic} alt="new-notebook-icon"/>
                <p>New Notebook</p>
              </button>
            </div>
            <div>
              <NotebooksSortingMenu 
                titleClick={this.titleClick}
                updatedClick={this.updatedClick}
                createdClick={this.createdClick}
              />
            </div>
          </div>
        </div>
        <div className="nb-row-head">
          <ul className="nb-list-head">
            <li className="nb-title head-title"><button onClick={this.titleClick} className="button-text">TITLE</button></li>
            <li className="nb-createdby head-create"><p>CREATED BY</p></li>
            <li className="nb-created head-updated"><button onClick={this.updatedClick} className="button-text">UPDATED </button></li>
            <li className="nb-updated head-created"><button onClick={this.createdClick} className="button-text">CREATED </button></li>
            <li className="nb-actions head-actions"><p>ACTIONS</p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NotebookHeader;