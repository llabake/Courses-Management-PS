import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/authorActions';
import { authors } from '../../api/mockAuthorApi';
import authorMock from '../mocks/authorMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Author action test', () => {
  it('Loads all authors', () => {
    const expectedAction = [
      { type: types.BEGIN_AJAX_CALL },
      {
      type: types.LOAD_AUTHORS_SUCCESS,
      authors,
    }];
    const store = mockStore({});
    return store.dispatch(actions.loadAuthors()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    })
  });
  it('Updates an author detail', () => {
    const expectedAction = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.UPDATE_AUTHOR_SUCCESS,
        author: authorMock.updatedAuthor,
      }
    ];
    const store = mockStore({
      authors: [{
        id: 'cory-house',
        firstName: 'Cory',
        lastName: 'House'
      }]
    });
    return store.dispatch(actions.saveAuthor(authorMock.updatedAuthor))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
    })
  });
  it('Createss an author successfully', () => {
    const expectedAction = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.CREATE_AUTHOR_SUCCESS,
        author: authorMock.createdAuthorWithId,
      }
    ];
    const store = mockStore({});
    return store.dispatch(actions.saveAuthor(authorMock.createdAuthor))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
    })
  });
  it('Deletes an author successfully', () => {
    const expectedAction = [
      {
        type: types.DELETE_AUTHOR_SUCCESS,
        authorId: authors[2].id,
      }
    ];
    const store = mockStore({});
    return store.dispatch(actions.deleteAuthor(authors[2].id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
    })
  });
});
