import axios from 'axios';
import {
  ACTION_FAILURE, ACTION_REQUEST, ACTION_SUCCESS,
} from '../constants/actions';

export const listProducts = () => async (dispatch) => {
  dispatch({ type: ACTION_REQUEST });

  axios.get('http://127.0.0.1:5000/api/products')
    .then((res) => dispatch({
      type: ACTION_SUCCESS,
      payload: res.data,
    })).catch((err) => dispatch({
      type: ACTION_FAILURE,
      payload: err.response && err.message,
    }));
};

export const a = '1234';
