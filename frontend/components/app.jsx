import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { NavBarContainer } from './nav_bar_container';

const App = () => {
  return (
    <div className="app-container">
        <div>
          <Route path="/" component={NavBarContainer}/>
            <Switch>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
            </Switch>
            
        </div>
    </div>
  )
}

export default App;