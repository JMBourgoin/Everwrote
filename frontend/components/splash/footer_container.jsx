import React from 'react';
import { Link } from 'react-router-dom';

export const FooterContainer = () => {
  return (
    <div className="foot-parent-container">
      <div className="foot-container">
        <div className="footer-buttons">
          <ul>

            <li>
              <a href="https://www.instagram.com/jmb.shots/?hl=en">
                <img
                  className="nav-footer-insta"
                  src={window.instaPic}
                  alt="insta"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jason-bourgoin-060a6a116">
                <img
                  className="nav-footer-linked"
                  src={window.linkedPic}
                  alt="linked"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/JMBourgoin">
                <img
                  className="nav-footer-git"
                  src={window.gitPic}
                  alt="jmb"
                />
              </a>
            </li>
            <li>
              <a href="https://jmbourgoin.com">
                <img
                  className="nav-footer-jmb"
                  src={window.jmbPic}
                  alt="jmb"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};