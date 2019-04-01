import React from 'react';
import { Link } from 'react-router-dom';

export const FooterContainer = () => {
  return (
    <div className="foot-parent-container">
      <div className="foot-container">
        <div className="footer-buttons">
          <ul>
           
            <li ><Link to='https://www.instagram.com/jmb.shots/?hl=en'><img className="nav-footer-insta" src={window.instaPic} alt="insta"/></Link></li>
            <li ><Link to='https://jmbourgoin.com'><img className="nav-footer-linked" src={window.linkedPic} alt="linked" /></Link></li>
            <li ><Link to='https://jmbourgoin.com'><img className="nav-footer-jmb" src={window.jmbPic} alt="jmb" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
};