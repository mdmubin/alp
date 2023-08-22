import axios from 'axios';
import * as actions from '../constants/userActions';

export const userLogin = (email, password) => async (dispatch) => {
  dispatch({ type: actions.LOGIN_REQUEST });

  axios.post('http://127.0.0.1:5000/api/users/login/', { email, password }, {
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: response.data,
    });
    localStorage.setItem('user', JSON.stringify(response.data));
  }).catch((err) => dispatch({
    type: actions.LOGIN_FAILURE,
    payload: err.response && err.response.data.message
      ? err.response.data.message
      : err.message,
  }));
};

export const userRegister = (name, username, email, password) => async (dispatch) => {
  dispatch({ type: actions.REGISTRATION_REQUEST });

  axios.post('http://127.0.0.1:5000/api/users/register', {
    name, username, email, password,
  }, {
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: response.data,
    });
    localStorage.setItem('user', JSON.stringify(response.data));
  }).catch((err) => dispatch({
    type: actions.REGISTRATION_FAILURE,
    payload: err.response && err.response.data.message
      ? err.response.data.message
      : err.message,
  }));
};

export const userLogout = () => async (dispatch) => {
  localStorage.removeItem('user');
  dispatch({ type: actions.LOGOUT_REQUEST });
};
