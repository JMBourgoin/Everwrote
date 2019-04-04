import { connect } from 'react-redux';
import { createNotebook } from '../../actions/notebooks';
import AddNotebook from './notebooks_modal';

const msp = (state, ownProps) => {
  let author_id = state.session.currentUserId;
  let closeModal = ownProps.closeModal;
  return ({
    author_id,
    closeModal,
    menuTitle: "Create new notebook."
  });
};

const mdp = dispatch => {
  return ({
    submitAction: notebook => dispatch(createNotebook(notebook)),
  });
};

export default connect(msp, mdp)(AddNotebook);