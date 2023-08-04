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
