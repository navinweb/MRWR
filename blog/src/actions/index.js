import axios from 'axios';
import firebase from "firebase";

import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST,
  CREATE_POST
} from './types';

var config = {
  apiKey: "AIzaSyCLIb0UxB8a8apShSQSgbgCh_k-jKGuUGQ",
  authDomain: "reactblognavinweb.firebaseapp.com",
  databaseURL: "https://reactblognavinweb.firebaseio.com",
  projectId: "reactblognavinweb",
  storageBucket: "reactblognavinweb.appspot.com",
  messagingSenderId: "485770789637"
};
firebase.initializeApp(config);

var Posts = firebase.database().ref('/posts/');

export function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  }
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
