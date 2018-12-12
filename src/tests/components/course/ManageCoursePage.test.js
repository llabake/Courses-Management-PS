import React from 'react';
import { shallow } from 'enzyme';
import { ManageCoursePage, mapStateToProps, mapDispatchToProps } from "../../../components/course/ManageCoursePage";
import courseMock from "../../mocks/courseMock";
import authorMock from "../../mocks/authorMock";

describe('<ManageCoursePage', () => {
  it('renders correctly', () => {
    const state = {
      course: {},
      errors: {},
      saving: false,
      isBlocking: false,
      isValid: false,
    };
    const wrapper = shallow(<ManageCoursePage {...state} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('calls the componentWillReceiveProps method', () => {
    const state = {
      course: {},
      errors: {},
      saving: false,
      isBlocking: false,
      isValid: false,
    };
    const wrapper = shallow(<ManageCoursePage {...state} />);
    const spy = jest.spyOn(wrapper.instance(), 'componentWillReceiveProps');
    const incomingProps = {
      course: courseMock.courses[0],
    };
    wrapper.instance().componentWillReceiveProps(incomingProps);
    expect(spy).toHaveBeenCalled();
  });
  it('should save a course', () => {
    const props = {
      course: {},
      match: {
        params: {
          id: courseMock.courses[0].id,
        },
      },
      saveCourse: jest.fn(() => Promise.resolve()),
      updateCourseState: jest.fn(),
      history: { push: jest.fn() },
      getCourseById: jest.fn((courses, id) => {
        const course = courses.filter(element => element.id === id);
        if (course.length) return Promise.resolve(course[0]);
        return Promise.reject();
      }),
    };
    const wrapper = shallow(<ManageCoursePage {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'saveCourse');
    wrapper.setState({
      course: {
        title: 'my course title',
        length: '07:10',
        authorId: 'my author',
        category: 'my category',
      },
    });
    wrapper.instance().saveCourse({ preventDefault: jest.fn() });
    expect(spy).toHaveBeenCalled();
  });
  it('renders a Prompt child component', () => {
    const state = {
      course: {},
      errors: {},
      saving: false,
      isBlocking: false,
      isValid: false,
    };

    const props = {
      saveCourse: jest.fn(),
      updateCourseState: jest.fn(),
      history: { push: jest.fn() },
      getCourseById: jest.fn((courses, id) => {
        const course = courses.filter(element => element.id === id);
        if (course.length) return Promise.resolve(course[0]);
        return Promise.reject();
      }),
    };
    const wrapper = shallow(<ManageCoursePage {...state} {...props} />);
    expect(wrapper.find('Prompt').length).toBe(1);
  });
  it('should update a course', () => {
    const props = {
      course: courseMock.courses[0],
      authors: authorMock.authors,
      match: {
        params: {
          id: courseMock.courses[0].id,
        },
      },
      saveCourse: jest.fn(() => Promise.resolve()),
      updateCourseState: jest.fn(() => Promise.resolve()),
      history: { push: jest.fn() },
      getCourseById: jest.fn((courses, id) => {
        const course = courses.filter(element => element.id === id);
        if (course.length) return Promise.resolve(course[0]);
        return Promise.reject();
      }),
    };
    const wrapper = shallow(<ManageCoursePage {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'updateCourseState');
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'title',
        value: 'this girl',
      },
    };
    wrapper.setState({
      course: {
        title: 'my course title',
        length: '07:10',
        authorId: 'my author',
        category: 'my category',
      },
    });
    wrapper.instance().updateCourseState(event);
    expect(spy).toHaveBeenCalled();
  });
  it('should dispatch needed actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('saveCourse');
    const { saveCourse } = mapDispatchToProps(dispatch);
    saveCourse(courseMock.createdCourseWithId);
    expect(dispatch).toHaveBeenCalled();
  });
});
