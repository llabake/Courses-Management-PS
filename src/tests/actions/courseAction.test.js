import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import * as types from '../../actions/actionTypes';
import * as actions from '../../actions/courseActions';
import { courses } from "../../api/mockCourseApi";
import courseMock from '../mocks/courseMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Action test', () => {
  it('should load all course', () => {
    const expectedAction = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.LOAD_COURSES_SUCCESS,
        courses,
      }];
    const store = mockStore({});
    return store.dispatch(actions.loadCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('Updates a course detail', () => {
    const expectedAction = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.UPDATE_COURSE_SUCCESS,
        course: courseMock.updatedCourse,
      },
    ];
    const store = mockStore({
      courses: [{
        id: "career-reboot-for-developer-mind",
        title: "Becoming an Outlier: Reprogramming the Developer Mind Awesome",
        watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        authorId: "cory-house",
        length: "2:30",
        category: "Technology",
      }],
    });
    return store.dispatch(actions.saveCourse(courseMock.updatedCourse))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
  it('creates a course successfully', () => {
    const expectedAction = [
      { type: types.BEGIN_AJAX_CALL },
      {
        type: types.CREATE_COURSE_SUCCESS,
        course: courseMock.createdCourseWithId,
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.saveCourse(courseMock.createdCourse))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
  it('Deletes a course successfully', () => {
    const expectedAction = [
      {
        type: types.DELETE_COURSE_SUCCESS,
        courseId: courses[2].id,
      },
    ];
    const store = mockStore({});
    return store.dispatch(actions.deleteCourse(courses[2].id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
  });
});
