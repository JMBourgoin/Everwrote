import { Route, Switch } from 'react-router-dom';
import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { NavBarContainer } from './nav_bar_container';
import { SplashPageContainer } from './splash_page_container';
import { Splash2Container } from './splash_2_container';

const App = () => {
  return (
    <div className="app-container">
        <div>
          <Route exact path="/" component={NavBarContainer}/>
          <Route exact path="/" component={SplashPageContainer}/>
          <Route exact path="/" component={Splash2Container} />

            <Switch>
                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
            </Switch>
            
        </div>
    </div>
  )
}

export default App;