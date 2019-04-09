import { connect } from 'react-redux';
import { updateTag } from '../../actions/tags';
import TagsModal from './tags_modal';

const msp = (state, ownProps) => {
  let author_id = state.session.currentUserId;
  let closeModal = ownProps.closeModal;
  let tag = ownProps.tag;
  return ({
    author_id,
    tag,
    closeModal,
    menuTitle: tag.name,
  });
};

const mdp = dispatch => {
  return ({
    submitAction: tag => dispatch(updateTag(tag)),
    fetchTag: id => dispatch(fetchTag(id))
  });
};

export default connect(msp, mdp)(TagsModal);