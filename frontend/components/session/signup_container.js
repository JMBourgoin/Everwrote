import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import signUpForm from './signup_form';

const msp = state => {
  return ({
    user: {
      email: "",
      password: "",
    },
    formMessage: "Already have an account?",
    formLink: "/login",
    formName: "Sign In"
  });
};
const mdp = dispatch => {
  return ({
    submitAction: user => dispatch(createNewUser(user)),
  });
};

export default connect(msp, mdp)(signUpForm);