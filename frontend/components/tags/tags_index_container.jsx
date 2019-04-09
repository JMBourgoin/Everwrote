
import { fetchAllTags, fetchTag } from '../../actions/tags';
import { connect } from 'react-redux';
import TagsIndex from './tags_index';

const msp = (state) => {
let tags = {};
if(state.entities.tags !== undefined){
    tags = state.entities.tags;
}
debugger
    return({
        tags,
    });
};

const mdp = dispatch => {
    return({
        fetchAllTags: () => dispatch(fetchAllTags()),
        fetchTag: id => dispatch(fetchTag(id)),
        createTag: tag => dispatch(createTag(tag))
    });
};


export default connect(msp, mdp)(TagsIndex);
