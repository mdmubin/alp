import axios from 'axios';
import * as actions from '../constants/actions';

export const getProductList = () => async (dispatch) => {
  dispatch({ type: actions.LIST_REQUEST });

  axios.get('http://127.0.0.1:5000/api/products')
    .then((res) => dispatch({
      type: actions.LIST_SUCCESS,
      payload: res.data,
    })).catch((err) => dispatch({
      type: actions.LIST_FAILURE,
      payload: err.response && err.message,
    }));
};

export const getProductDetails = (id) => async (dispatch) => {
  dispatch({ type: actions.DETAILS_REQUEST });

  axios.get(`http://127.0.0.1:5000/api/products/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: actions.DETAILS_SUCCESS,
        payload: res.data,
      });
    }).catch((err) => dispatch({
      type: actions.DETAILS_FAILURE,
      payload: err.response && err.message,
    }));
};
