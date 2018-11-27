import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const actionTypeEndsInSuccess = type =>
  type.substring(type.length - 8) === '_SUCCESS';

const ajaxStatusReducer = (state = initialState.ajaxCallsInProgress, action) => {
  if (action.type === actionTypes.BEGIN_AJAX_CALL) {
    return state + 1;
  } if (action.type === actionTypes.AJAX_CALL_ERROR
    || actionTypeEndsInSuccess(action.type)) {
    return state - 1;
  }
  return state;
};

export default ajaxStatusReducer;
