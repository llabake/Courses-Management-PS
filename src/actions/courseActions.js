import * as types from './actionTypes';
import CourseApi from "../api/mockCourseApi";
import { beginAjaxCall, ajaxCallError } from "./ajaxStatusAction";

export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(courseId) {
  return { type: types.DELETE_COURSE_SUCCESS, courseId };
}

export function loadCourses() {
  return dispatch => CourseApi.getAllCourses().then((courses) => {
    dispatch(loadCoursesSuccess(courses));
  }).catch((error) => {
    throw (error);
  });
}

// export function loadCourses() {
//   return function (dispatch) {
//     dispatch(beginAjaxCall());
//     return CourseApi.getAllCourses().then((courses) => {
//       dispatch(loadCoursesSuccess(courses));
//     }).catch((error) => {
//       throw (error);
//     });
//   }
// }

export function saveCourse(course) {
  return dispatch => CourseApi.saveCourse(course)
    .then(savedCourse => (course.id ? dispatch(updateCourseSuccess(savedCourse))
      : dispatch(createCourseSuccess(savedCourse)))).catch((error) => {
      throw (error);
    });
}

export function deleteCourse(courseId) {
  return dispatch => CourseApi.deleteCourse(courseId)
    .then((deletedCourse) => {
      dispatch(deleteCourseSuccess(deletedCourse));
    }).catch((error) => {
      throw (error);
    });
}
// export function saveCourse(course) {
//   return function (dispatch) {
//     dispatch(beginAjaxCall());
//     return CourseApi.saveCourse(course)
//       .then(savedCourse => (course.id ? dispatch(updateCourseSuccess(savedCourse))
//         : dispatch(createCourseSuccess(savedCourse)))).catch((error) => {
//          dispatch(ajaxCallError(error)
//         throw (error);
//       });
//
//   }
// }
