/* eslint-disable import/prefer-default-export */
/* eslint-disable default-param-last */

import * as actions from '../constants/cartActions';

export function cartReducer(state = { cartItems: [], shippingAddress: {} }, action) {
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
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i._id !== action.payload),
      };
    case actions.SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
}
