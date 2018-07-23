import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default (state = {}, actions) => {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    default:
      return state;
  }
};
