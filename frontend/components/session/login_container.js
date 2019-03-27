import { connect } from 'react-redux';
import { createNewSession } from '../../actions/session';
import signUpForm from './signup_form';

const msp = state => {
  return ({
    user: {
      email: "",
      password: "",
    }
  });
};

const mdp = dispatch => {
  return ({
    submitAction: user => dispatch(createNewSession(user)),
  });
};


export default connect(msp, mdp)(signUpForm);