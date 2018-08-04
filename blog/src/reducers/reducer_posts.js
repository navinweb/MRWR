import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case DELETE_POST:
      return _.omit(state, action.payload);
  }

  return state;
};
