import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import { signup, login, logout } from './actions/session_actions';
// import { fetchAllPhotos } from './actions/photo_actions';
import { fetchAllComments } from './actions/comment_actions';
// import * as PHOTOUtil from './util/photo_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchAllComments = fetchAllComments;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={ store }/>, root);
});
