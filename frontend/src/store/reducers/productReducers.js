/* eslint-disable default-param-last */

import * as actions from '../constants/productActions';

export function productListReducer(state = { products: [] }, action) {
  switch (action.type) {
    case actions.LIST_REQUEST:
      return { loading: true, products: [] };
    case actions.LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case actions.LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function productDetailsReducer(state = { product: { reviews: [] } }, action) {
  switch (action.type) {
    case actions.DETAILS_REQUEST:
      return { loading: true, ...state };
    case actions.DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case actions.DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
