import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarContainer = () => {
  return (
    <div className="nav-parent-container">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={window.logoPic} alt="Everwrote Logo"/>
          <h3>Everwrote</h3>
        </div>
        <div className="nav-buttons">
          <ul>
            <li ><Link className="nav-signup" to={'/signup'}>Sign up</Link></li>
            <li className="or"> or </li>
            <li ><Link className="nav-login" to={'/login'}>Log in</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
};