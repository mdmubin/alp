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

export const abc = 123;
