import React from 'react';
import { shallow, mount } from 'enzyme';
import NoCourses from "../../../components/common/NoCourses";
import { AuthorsPage, mapDispatchToProps } from "../../../components/authors/AuthorsPage";
import AuthorList from "../../../components/authors/AuthorList";
import authorMock from "../../mocks/authorMock";
import courseMock from "../../mocks/courseMock";

describe('<AuthorsPage', () => {
  it('renders correctly', () => {
    const state = {
      author: {},
    };
    const props = {
      courses: [],
      loading: false,
      deleteAuthor: jest.fn(),
      authors: [],
    };
    const wrapper = shallow(<AuthorsPage {...props} {...state} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders No courses component when there are no authors', () => {
    const state = {
      author: {},
    };
    const props = {
      courses: [],
      loading: false,
      deleteAuthor: jest.fn(),
      authors: [],
    };
    const wrapper = shallow(<AuthorsPage {...props} {...state} />);
    expect(wrapper.find(NoCourses)).toBeTruthy();
  });
  it('renders a list of courses when there are courses', () => {
    const props = {
      authors: authorMock.authors,
      loading: false,
      deleteAuthor: jest.fn(),
      redirectToAddAuthorPage: jest.fn(),
      courses: courseMock.courses,
    };
    const wrapper = shallow(<AuthorsPage {...props} />);
    expect(wrapper.find(AuthorList)).toBeTruthy();
  });
  it('redirects to add course page', () => {
    const props = {
      courses: courseMock.courses,
      authors: authorMock.authors,
      loading: false,
      deleteAuthor: jest.fn(),
      redirectToAddAuthorPage: jest.fn(),
      history: { push: jest.fn() },
    };

    const wrapper = shallow(<AuthorsPage {...props} />);
    wrapper.find('.btn').simulate('click');
    expect(props.history.push).toHaveBeenCalledWith('/author');
  });
  it('delete a author ', () => {
    const props = {
      courses: courseMock.courses,
      authors: authorMock.authors,
      loading: false,
      deleteAuthor: jest.fn(() => Promise.resolve()),
      redirectToAddAuthorPage: jest.fn(),
      history: { push: jest.fn() },
    };

    const wrapper = shallow(<AuthorsPage {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'deleteAuthor');
    wrapper.instance().deleteAuthor('mock-author-one');
    expect(spy).toHaveBeenCalled();
  });

  it('should dispatch needed actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('deleteAuthor');
    const { deleteAuthor } = mapDispatchToProps(dispatch);
    deleteAuthor();
    expect(dispatch).toHaveBeenCalled();
  });
});
