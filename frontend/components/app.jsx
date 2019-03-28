import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { NavBarContainer } from './splash/nav_bar_container';
import { SplashPageContainer } from './splash/splash_page_container';
import { Splash2Container } from './splash/splash_2_container';
import { Splash3Container } from './splash/splash_3_container';
import  NotebooksContainer  from './notebooks/notebooks_container';

const App = () => {
  return (
    <div className="app-container">
        <div>
          <Route exact path="/" component={NavBarContainer}/>
          <Route exact path="/" component={SplashPageContainer}/>
          <Route exact path="/" component={Splash2Container} />
          <Route exact path="/" component={Splash3Container} />
          <Switch>
              <AuthRoute exact path="/login" component={LoginFormContainer} />
              <AuthRoute exact path="/signup" component={SignupFormContainer} />
              <ProtectedRoute path="/notebooks" component={NotebooksContainer}/>
          </Switch>
            
        </div>
    </div>
  )
}

export default App;