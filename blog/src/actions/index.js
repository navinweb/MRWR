import axios from 'axios';
import firebase from 'firebase';

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

export function createPost(post, callback) {
  return dispatch => Posts.push(post)
    .then(() => callback());
}

export function deletePost(key, callback) {
  return dispatch => Posts.child(key).remove()
    .then(() => callback());
}
