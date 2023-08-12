import axios from 'axios';
import * as actions from '../constants/userActions';

export const userLogin = (email, password) => async (dispatch) => {
  dispatch({ type: actions.LOGIN_REQUEST });

  axios.post('http://127.0.0.1:5000/api/users/login/', { email, password }, {
    headers: { 'Content-Type': 'application/json' },
  }).then((data) => {
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('user', JSON.stringify(data));
  }).catch((err) => dispatch({
    type: actions.LOGIN_FAILURE,
    payload: err.response && err.response.data.message
      ? err.response.data.message
      : err.message,
  }));
};

export const abc = 123;
