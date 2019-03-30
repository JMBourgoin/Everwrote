import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import signUpForm from './signup_form';

const msp = state => {
  return ({
    user: {
      email: "",
      password: "",
    },
    errors: state.errors.login,
    formMessage: "Already have an account?",
    formLink: "/login",
    formName: "Sign In",
    background: "form-background",
    klass: "signup-form-container",
    header: "form-header",
    logo: `${window.logoPic}`
  });
};
const mdp = dispatch => {
  return ({
    submitAction: user => dispatch(createNewUser(user)),
  });
};

export default connect(msp, mdp)(signUpForm);