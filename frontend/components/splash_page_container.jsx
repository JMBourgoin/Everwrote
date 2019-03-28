import React from 'react';
import { Link } from 'react-router-dom';

export const SplashPageContainer = () => {
  return (
    <div className="splash-container">
      <div className="splash-image">
        <img src={window.splashHero} alt="Everwrote Hero" />
      </div>
      <div className="splash-text">
        <h2>Feel organized without the effort</h2>
        <h4>Everwrote helps you capture and prioritize ideas, projects, and to-do lists, so nothing falls through the cracks.</h4>
      <div className="splash-button">
        <Link className="splash-signup" to={'/signup'}>SIGN UP FOR FREE</Link>
      </div>
      </div>
    </div>
  )
};