import React from 'react';

export const Splash2Container = () => {
  return (
    <div className="splash2-container">
      <div className="splash2-image">
        <img className="splash2-image" src={window.splashtwo} alt="Everwrotebrain" />
      </div>
      <h2>Focus on what matters most</h2>
      <div className="splash2-text">
        <h3 className="st1">Manage everything from big projects to personal moments.</h3>
        <h3 className="st2">Capture ideas and inspiration in notes, voice, and pictures.</h3>
        <h3 className="st3">Never lose track of your tasks.</h3>
      </div>
    </div>
  )
};