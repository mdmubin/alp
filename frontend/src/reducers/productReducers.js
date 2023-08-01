/* eslint-disable default-param-last */

import { ACTION_FAILURE, ACTION_REQUEST, ACTION_SUCCESS } from '../constants/actions';

export function productListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case ACTION_REQUEST:
      return { loading: true, products: [] };
    case ACTION_SUCCESS:
      return { loading: false, products: action.payload };
    case ACTION_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function productDetailReducer(state = {}, action) {

}
