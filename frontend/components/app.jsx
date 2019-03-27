import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { Route, Switch } from 'react-router-dom';
import React from 'react';

const App = () => {
  return (
    <div className="app-container>"
        <div>
            <Switch>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
    </div>
  )
}

export default App;