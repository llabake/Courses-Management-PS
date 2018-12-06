import React from 'react';
import { shallow } from 'enzyme';
import { ManageAuthorPage, mapStateToProps, mapDispatchToProps } from "../../../components/authors/ManageAuthorPage";
import courseMock from "../../mocks/courseMock";
import authorMock from "../../mocks/authorMock";

describe('<ManageAuthorPage', () => {
  it('renders correctly', () => {
    const state = {
      author: {},
      errors: {},
      saving: false,
      isBlocking: false,
      isValid: false,
    };
    const wrapper = shallow(<ManageAuthorPage {...state} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should save an author', () => {
    const props = {
      author: {},
      authors: authorMock.authors,
      match: {
        params: {
          id: courseMock.courses[0].id,
        },
      },
      saveAuthor: jest.fn(() => Promise.resolve()),
      updateAuthorState: jest.fn(() => Promise.resolve()),
      history: { push: jest.fn() },
    };
    const wrapper = shallow(<ManageAuthorPage {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'saveAuthor');
    wrapper.setState({
      author: {
        firstName: 'my author name',
        lastName: 'my author last name',
      },
    });
    wrapper.instance().saveAuthor({ preventDefault: jest.fn() });
    expect(spy).toHaveBeenCalled();
  });
  it('renders a Prompt child component', () => {
    const state = {
      author: {},
      errors: {},
      saving: false,
      isBlocking: false,
      isValid: false,
    };

    const props = {
      saveAuthor: jest.fn(),
      updateAuthorState: jest.fn(),
      history: { push: jest.fn() },
    };
    const wrapper = shallow(<ManageAuthorPage {...state} {...props} />);
    expect(wrapper.find('Prompt').length).toBe(1);
  });
  it('should update an author', () => {
    const props = {
      course: courseMock.courses[0],
      authors: authorMock.authors,
      author: authorMock.authors[0],
      match: {
        params: {
          id: authorMock.authors[0].id,
        },
      },
      saveAuthor: jest.fn(() => Promise.resolve()),
      updateAuthorState: jest.fn(() => Promise.resolve()),
      history: { push: jest.fn() },
    };
    const wrapper = shallow(<ManageAuthorPage {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'updateAuthorState');
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'firstName',
        value: 'well well',
      },
    };
    wrapper.instance().updateAuthorState(event);
    expect(spy).toHaveBeenCalled();
  });
  it('should dispatch needed actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('saveAuthor');
    const { saveAuthor } = mapDispatchToProps(dispatch);
    saveAuthor(authorMock.createdAuthorWithId);
    expect(dispatch).toHaveBeenCalled();
  });
});
