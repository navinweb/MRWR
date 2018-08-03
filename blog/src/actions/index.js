import axios from 'axios';
import Firebase from 'firebase';

import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  CREATE_POST
} from './types';

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
// const API_KEY = '?key=navinweb';

// const Posts = new Firebase('https://fbredux.firebaseio.com/');
const Posts = new Firebase('https://reactblognavinweb.firebaseio.com/');

export function fetchPosts() {
  console.log(Posts);

}

export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  }
}
