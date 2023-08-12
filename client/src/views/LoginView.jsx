/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { userLogin } from '../store/actions/userActions';

function LoginView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, user } = useSelector((state) => state.userAuth);
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (user) { // redirect if already logged in
      navigate(redirect);
    }
  }, [user]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row my-5 justify-content-center">
          <div className="col-4 form-group-sm card border-success p-5">
            <form onSubmit={loginHandler}>

              <div className="mb-3">
                <label htmlFor="EmailInputField" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  id="EmailInputField"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="PasswordInputField" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="PasswordInputField"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="container text-center">
                <button type="submit" className="my-3 btn btn-primary" disabled={loading}>
                  {loading && <span className="spinner-border spinner-border-sm me-2" />}
                  Login
                </button>
                <div className="row">
                  <Link to="/register">Don&apos;t have an account?</Link>
                </div>
              </div>

            </form>
          </div>
        </div>

        {error && (
          <div className="row my-5 justify-content-center">
            <div className="col-3 alert text-primary border border-danger" role="alert">
              <i className="bi bi-exclamation-circle-fill text-danger px-2" />
              {`Error: ${error}`}
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default LoginView;
