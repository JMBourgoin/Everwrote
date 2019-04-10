import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import React from 'react';
import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
import { NavBarContainer } from './splash/nav_bar_container';
import { SplashPageContainer } from './splash/splash_page_container';
import { Splash2Container } from './splash/splash_2_container';
import { Splash3Container } from './splash/splash_3_container';
import { Splash4Container } from "./splash/splash_4_container";
import { FooterContainer } from "./splash/footer_container";
import  NotebooksContainer  from './notebooks/notebooks_container';
import SidebarContainer from './sidebar/sidebar_container';
import NotesIndex from './notes/notes_index_container';
import NotebookNotesIndex from './notes/notebook_notes_index_container';
import NewNoteContainer from './notes/new_note';
import EditNoteContainer from './notes/edit_note';
import TagsIndex from './tags/tags_index_container';

const App = () => {
  return (
    <div className="app-container">
      <Route exact path="/" component={NavBarContainer} />
      <Route exact path="/" component={SplashPageContainer} />
      <Route exact path="/" component={Splash2Container} />
      <Route exact path="/" component={Splash3Container} />
      <Route exact path="/" component={Splash4Container} />
      <Route exact path="/" component={FooterContainer} />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
      <div className="main-container">
        <ProtectedRoute path="/notebooks" component={NotebooksContainer} />
        <ProtectedRoute path="/notebooks" component={SidebarContainer} />
        <ProtectedRoute exact path="/notes" component={NewNoteContainer} />
        <ProtectedRoute exact path="/notes/notebooks/:notebookId" component={NewNoteContainer} />
        <ProtectedRoute exact path="/notes" component={NotesIndex} />
        <ProtectedRoute exact path="/notes/notebooks/:notebookId" component={NotebookNotesIndex} />
        <ProtectedRoute path="/notes" component={SidebarContainer} />
        <ProtectedRoute exact path="/notes/:noteId/notebooks/:notebookId" component={EditNoteContainer} />
        <ProtectedRoute exact path="/notes/:noteId/notebooks/:notebookId" component={NotebookNotesIndex} />
        <ProtectedRoute exact path="/tags" component={TagsIndex} />
        <ProtectedRoute exact path="/tags" component={SidebarContainer} />


      </div>
    </div>
  );
}

export default App;