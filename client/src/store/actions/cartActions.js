/* eslint-disable import/prefer-default-export */

import axios from 'axios';
import * as actions from '../constants/cartActions';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  axios.get(`http://127.0.0.1:5000/api/products/${id}`)
    .then(({ data }) => dispatch({
      type: actions.ADD_ITEM,
      payload: {
        _id: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    }))
    .then(() => localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cartItems)));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({ type: actions.DEL_ITEM, payload: id });
  localStorage.setItem('cartItems', JSON.stringify(getState().cartList.cartItems));
};

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({ type: actions.SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
