import expect from 'expect';
import reducer from '../../reducers/authorReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';
import authorMock from '../mocks/authorMock';

describe('Author reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState.authors);
  });
  it('should load all authors', () => {
    const loadAllAuthorsAction = {
      type: types.LOAD_AUTHORS_SUCCESS,
      authors: authorMock.authors,
    };
    expect(reducer([], loadAllAuthorsAction))
      .toEqual(authorMock.authors);
  });
  it('should create an author', () => {
    const createAuthors = {
      type: types.CREATE_AUTHOR_SUCCESS,
      author: authorMock.createdAuthorWithId,
    };
    expect(reducer([], createAuthors))
      .toEqual([authorMock.createdAuthorWithId]);
  });
  it('should update an author successfully', () => {
    const updateAuthorAction = {
      type: types.UPDATE_AUTHOR_SUCCESS,
      author: authorMock.updatedAuthor,
    };
    expect(reducer([authorMock.authorToBeUpdated], updateAuthorAction))
      .toEqual([authorMock.updatedAuthor]);
  });
  it('should delete an author successfully', () => {
    const deleteAuthorAction = {
      type: types.DELETE_AUTHOR_SUCCESS,
      authorId: authorMock.createdAuthorWithId.id,
    };
    expect(reducer([authorMock.createdAuthorWithId], deleteAuthorAction))
      .toEqual([]);
  });
});
