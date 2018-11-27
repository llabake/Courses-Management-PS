import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return [...state, action.course];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        action.course,
      ];
    case types.DELETE_COURSE_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const courses = state.filter(course => course.id !== action.courseId);
      return [...state, courses];
    default:
      return state;
  }
}
