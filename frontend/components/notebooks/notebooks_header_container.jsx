import React from 'react';
import { Link } from 'react-router-dom';

class NotebookHeader extends React.Component {
  constructor(props){
    super(props);
  }
  
  
  render(){
    
    return (
      <div className="nb-header">
        <h3 className="nb-header-head">Notebooks</h3>
        <div className="nb-header-sub">
          <h6>My notebook list</h6>
          <div className="nb-header-sub-right">
            <div className="nb-header-notebook">
              <Link to={'/notebooks'}>
                <img src={window.notebookPic} alt="new-notebook-icon"/>
              </Link>
              <Link to={'/notebooks'}><p>New Notebook</p></Link>
            </div>
            <div>
              <Link to={'/notebooks'}>
                <img src={window.sortPic} alt="sort-by-icon"/>
              </Link>
            </div>
          </div>
        </div>
        <div >
          <ul className="nb-row-head">
            <li><Link to={'/notebooks'}><p>TITLE</p></Link></li>
            <li><p>CREATED BY</p></li>
            <li><Link to={'/notebooks'}><p>UPDATED</p></Link></li>
            <li><Link to={'/notebooks'}><p>CREATED</p></Link></li>
            <li><p>ACTIONS</p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NotebookHeader;