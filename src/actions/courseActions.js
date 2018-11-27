import * as types from './actionTypes';
import CourseApi from "../api/mockCourseApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusAction";

export const loadCoursesSuccess = courses => ({
  type: types.LOAD_COURSES_SUCCESS, courses,
});

export const updateCourseSuccess = course => ({
  type: types.UPDATE_COURSE_SUCCESS, course,
});

export const createCourseSuccess = course => ({
  type: types.CREATE_COURSE_SUCCESS, course,
});

export const deleteCourseSuccess = courseId => ({
  type: types.DELETE_COURSE_SUCCESS, courseId,
});

export const loadCourses = () => (dispatch) => {
  dispatch(beginAjaxCall());
  return CourseApi.getAllCourses()
    .then((courses) => {
      dispatch(loadCoursesSuccess(courses));
    })
    .catch((error) => {
      throw (error);
    });
};

export const saveCourse = course => (dispatch) => {
  dispatch(beginAjaxCall());
  return CourseApi.saveCourse(course)
    .then((savedCourse) => {
      // eslint-disable-next-line no-unused-expressions
      course.id ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
    })
    .catch((error) => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
};

export const deleteCourse = courseId => dispatch => CourseApi.deleteCourse(courseId)
  .then(() => {
    dispatch(deleteCourseSuccess(courseId));
  }).catch((error) => {
    throw (error);
  });
