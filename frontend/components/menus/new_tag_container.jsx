import { connect } from 'react-redux';
import { createTag } from '../../actions/tags';
import TagModal from './tags_modal';

const msp = (state, ownProps) => {
  let author_id = state.session.currentUserId;
  let closeModal = ownProps.closeModal;
  
  return ({
    author_id,
    closeModal,
    menuTitle: "Create new Tag."
  });
};

const mdp = dispatch => {
  return ({
    submitAction: tag => dispatch(createTag(tag)),
  });
};

export default connect(msp, mdp)(TagModal);