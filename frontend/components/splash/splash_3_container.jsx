import React from 'react';
import SignUpContainer from '../session/signup2_container';

export const Splash3Container = () => {
  return (
    <div>
      <div className="splash3-container">
        <div className="splash3-image">
          <img className="splash3-image" src={window.splash3pic} alt="Everwrotebrain" />
        </div>
        <div className="splash3-header-container">
          <h2>At work, at home, and everywhere in between</h2>
          <h6>Everwrote's plans and pricing are designed to fit your needs.</h6>
        </div>
        <div className="splash3-brain-container">
          <div>
            <h3 className="sb1">Remember everything important</h3>
            <h6 className="sb2">A single place for your notes, ideas, lists and reminders.</h6>
          </div>
          <img className="brain-pic" src={window.brainpic} alt="Everwrote Brain"/>
        </div>
        <div className="splash3-organize-container">
          <div>
            <h3 className="sb1">Stay organized, wherever you are</h3>
            <h6 className="sb2">Plan, keep records, and manage projects from any device–even offline.</h6>
          </div>
          <img className="organize-pic" src={window.organizepic} alt="Everwrote Organize"/>
        </div>
        <div className="splash3-brain-container">
          <div>
            <h3 className="sb1">Collaborate with your team</h3>
            <h6 className="sb2">Manage projects, deadlines, clients and meetings with ease.</h6>
          </div>
            <img className="collaborate-pic" src={window.collaboratepic} alt="Everwrote Collaborate"/>
        </div>
      </div>
      <div className="splash4-signup-today">
        <div>
          <h3 className="sb1">Sign up for Everwrote Today</h3>
          <h6 className="sb2">Capture ideas and inspiration from anywhere and manage tasks with ease.</h6>
        </div>
        <SignUpContainer className="bottom-signup"/>
      </div>
    </div>
  )
};