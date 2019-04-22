
import { fetchAllTags, fetchTag, deleteTag } from '../../actions/tags';
import { connect } from 'react-redux';
import TagsIndex from './tags_index';

const msp = (state) => {
let tags = {};
if(state.entities.tags !== undefined){
    tags = state.entities.tags;
}
    return({
        tags,
    });
};

const mdp = dispatch => {
    return({
        fetchAllTags: () => dispatch(fetchAllTags()),
        fetchTag: id => dispatch(fetchTag(id)),
        createTag: tag => dispatch(createTag(tag)),
        deleteTag: id => dispatch(deleteTag(id))
    });
};


export default connect(msp, mdp)(TagsIndex);
