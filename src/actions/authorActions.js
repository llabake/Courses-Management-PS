import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { ajaxCallError, beginAjaxCall } from "./ajaxStatusAction";

export const loadAuthorsSuccess = authors => ({
  type: types.LOAD_AUTHORS_SUCCESS,
  authors,
});

export const updateAuthorSuccess = author => ({
  type: types.UPDATE_AUTHOR_SUCCESS,
  author,
});

export const createAuthorSuccess = author => ({
  type: types.CREATE_AUTHOR_SUCCESS, author,
});

export const deleteAuthorSuccess = authorId => ({
  type: types.DELETE_AUTHOR_SUCCESS, authorId,
});

export const loadAuthors = () => (dispatch) => {
  dispatch(beginAjaxCall());
  return AuthorApi.getAllAuthors().then((authors) => {
    dispatch(loadAuthorsSuccess(authors));
  }).catch((error) => {
    throw (error);
  });
};

export const saveAuthor = author => (dispatch) => {
  dispatch(beginAjaxCall());
  return AuthorApi.saveAuthor(author)
    .then((savedAuthor) => {
      // eslint-disable-next-line no-unused-expressions
      author.id ? dispatch(updateAuthorSuccess(savedAuthor))
        : dispatch(createAuthorSuccess(savedAuthor));
    })
    .catch((error) => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
};

export const deleteAuthor = authorId => dispatch => AuthorApi.deleteAuthor(authorId)
  .then(() => {
    dispatch(deleteAuthorSuccess(authorId));
  }).catch((error) => {
    throw (error);
  });
