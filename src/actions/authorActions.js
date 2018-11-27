import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { beginAjaxCall } from "./ajaxStatusAction";

export const loadAuthorsSuccess = authors => ({ type: types.LOAD_AUTHORS_SUCCESS, authors });

export const loadAuthors = () => (dispatch) => {
  dispatch(beginAjaxCall());
  return AuthorApi.getAllAuthors().then((authors) => {
    dispatch(loadAuthorsSuccess(authors));
  }).catch((error) => {
    throw (error);
  });
};
