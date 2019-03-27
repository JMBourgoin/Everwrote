import LoginFormContainer from './session/login_container';
import SignupFormContainer from './session/signup_container';
const App = () => (
    <div>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
)

export default App;