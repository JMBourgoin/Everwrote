import { connect } from 'react-redux';
import { createNewSession, clearErrors } from '../../actions/session';
import signUpForm from './signup_form';

const msp = state => {
  return ({
    user: {
      email: "",
      password: "",
    },
    errors: state.errors,
    formMessage: "Don't have an account?",
    formLink: "/signup",
    formName: "Create Account",
    background: "form-background",
    klass: "signup-form-container",
    header: "form-header",
    logo: `${window.logoPic}`
  });
};

const mdp = dispatch => {
  return ({
    submitAction: user => dispatch(createNewSession(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};


export default connect(msp, mdp)(signUpForm);