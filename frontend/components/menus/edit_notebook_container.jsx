import { connect } from 'react-redux';
import { updateNotebook } from '../../actions/notebooks';
import AddNotebook from './notebooks_modal';

const msp = (state, ownProps) => {
  let author_id = state.session.currentUserId;
  let closeModal = ownProps.closeModal;
  let notebook = ownProps.notebook;
  return ({
    author_id,
    notebook,
    closeModal,
    menuTitle: notebook.title,
  });
};

const mdp = dispatch => {
  return ({
    submitAction: notebook => dispatch(updateNotebook(notebook)),
    fetchNotebook: id => dispatch(fetchNotebook(id))
  });
};

export default connect(msp, mdp)(AddNotebook);