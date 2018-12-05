import expect from 'expect';
import reducer from '../../reducers/courseReducer';
import * as types from '../../actions/actionTypes';
import initialState from '../../reducers/initialState';
import courseMock from '../mocks/courseMock';

describe('Course reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState.courses);
  });
  it('should load all courses', () => {
    const loadAllCoursesAction = {
      type: types.LOAD_COURSES_SUCCESS,
      courses: courseMock.courses,
    };
    expect(reducer([], loadAllCoursesAction))
      .toEqual(courseMock.courses);
  });
  it('should create a course', () => {
    const createCourses = {
      type: types.CREATE_COURSE_SUCCESS,
      course: courseMock.createdCourseWithId,
    };
    expect(reducer([], createCourses))
      .toEqual([courseMock.createdCourseWithId]);
  });
  it('should update a course successfully', () => {
    const updateCourseAction = {
      type: types.UPDATE_COURSE_SUCCESS,
      course: courseMock.updatedCourse,
    };
    expect(reducer([courseMock.courseToBeUpdated], updateCourseAction))
      .toEqual([courseMock.updatedCourse]);
  });
  it('should delete a course successfully', () => {
    const deleteCourseAction = {
      type: types.DELETE_COURSE_SUCCESS,
      courseId: courseMock.createdCourseWithId.id,
    };
    expect(reducer([courseMock.createdCourseWithId], deleteCourseAction))
      .toEqual([]);
  });
});
