/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function RegisterView() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row my-5 justify-content-center">
          <div className="col-4 form-group-sm card border-success p-5">

            <form>

              <div className="mb-3">
                <label htmlFor="EmailInputField" className="form-label">
                  Name
                </label>
                <input type="email" id="EmailInputField" className="form-control" aria-describedby="emailHelp" placeholder="Name" />
              </div>

              <div className="mb-3">
                <label htmlFor="EmailInputField" className="form-label">
                  Username
                </label>
                <input type="email" id="EmailInputField" className="form-control" aria-describedby="emailHelp" placeholder="Username" />
              </div>

              <div className="mb-3">
                <label htmlFor="EmailInputField" className="form-label">
                  Email address
                </label>
                <input type="email" id="EmailInputField" className="form-control" aria-describedby="emailHelp" placeholder="Email" />
              </div>

              <div className="mb-3">
                <label htmlFor="PasswordInputField" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="PasswordInputField" placeholder="Password" />
              </div>

              <div className="container text-center">
                <button type="submit" className="my-3 btn btn-primary">Register</button>
                <div className="row">
                  <Link to="/login">Already have an account?</Link>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterView;
