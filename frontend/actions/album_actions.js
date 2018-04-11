import * as APIAlbum from '../util/album_api_util';

export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const REMOVE_ALBUM = "REMOVE_ALBUM";
export const RECEIEVE_ERRORS = "RECEIEVE_ERRORS";

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

export const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

export const removeAlbum = albumId => ({
  type: REMOVE_ALBUM,
  albumId
});

export const receiveErrors = errors => ({
  type: RECEIEVE_ERRORS,
  errors
});

export const fetchAllAlbums = id => dispatch => (
  APIAlbum.fetchAllAlbums(id)
    .then(albums => (dispatch(receiveAllAlbums(albums))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchAlbum = id => dispatch => (
  APIAlbum.fetchAlbum(id)
    .then(album => (dispatch(receiveAlbum(album))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createAlbum = album => dispatch => (
  APIAlbum.createAlbum(album)
    .then(newAlbum => (dispatch(receiveAlbum(newAlbum))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteAlbum = id => dispatch => (
  APIAlbum.removeAlbum(id)
    .then(album => (dispatch(removeAlbum(album))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateAlbum = album => dispatch => (
  APIAlbum.updateAlbum(album)
    .then(newAlbum => (dispatch(receiveAlbum(newAlbum))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);