/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */

import * as actions from '../constants/cartActions';

export function cartListReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case actions.ADD_ITEM: {
      const newItem = action.payload;
      const original = state.cartItems.find((i) => i._id === newItem._id);

      if (original) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) => (i._id === original._id ? newItem : i)),
        };
      }

      return { ...state, cartItems: [...state.cartItems, newItem] };
    }
    case actions.DEL_ITEM:
      return {};
    default:
      return state;
  }
}
