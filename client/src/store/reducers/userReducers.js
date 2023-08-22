/* eslint-disable default-param-last */

import * as actions from '../constants/userActions';

export function userAuthReducer(state = {}, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return { loading: true };
    case actions.LOGIN_SUCCESS:
      return { loading: false, user: action.payload };
    case actions.LOGIN_FAILURE:
      return { loading: false, error: action.payload };
    case actions.LOGOUT_REQUEST:
      return {};
    default:
      return state;
  }
}

export function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case actions.REGISTRATION_REQUEST:
      return { loading: true };
    case actions.REGISTRATION_SUCCESS:
      return { loading: false, user: action.payload };
    case actions.REGISTRATION_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
