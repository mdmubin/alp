/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { userRegister } from '../store/actions/userActions';

function RegisterView() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error, user } = useSelector((state) => state.user.userRegister);
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const handleRegistration = (e) => {
    e.preventDefault();
    dispatch(userRegister(name, username, email, password));
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row my-5 justify-content-center">
          <div className="col-4 form-group-sm card border-success p-5">

            <form onSubmit={handleRegistration}>

              <div className="mb-3">
                <label htmlFor="NameInputField" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="NameInputField"
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="UsernameInputField" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="UsernameInputField"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  pattern="[A-Za-z0-9]+"
                />
              </div>

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
                <button type="submit" className="my-3 btn btn-primary">
                  {loading && <span className="spinner-border spinner-border-sm me-2" />}
                  Register
                </button>
                <div className="row">
                  <Link to="/login">Already have an account?</Link>
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

export default RegisterView;
