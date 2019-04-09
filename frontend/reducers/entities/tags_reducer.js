 import {
    RECEIVE_ALL_TAGS,
    RECEIVE_TAG,
    DELETE_TAG
  } from '../../actions/tags';
  import { merge } from 'lodash';
  
  
  const TagsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = newState;
    switch (action.type) {
      case RECEIVE_ALL_TAGS:
        return action.tags;
      case RECEIVE_TAG:
        newState = merge({}, oldState, { [action.tag.id]: action.tag });
        return newState;
      case DELETE_TAG:
        newState = merge({}, oldState);
        let id = action.id;
        delete newState[id];
        return newState;
      default:
        return oldState;
    }
  };
  

export default TagsReducer;