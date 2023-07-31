import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">

        {/* title + icon */}
        <Link className="navbar-brand" to="/">
          {/* "font-family: 'Dancing Script', cursive;" */}
          <span
            className="justify-content-around"
            style={{
              fontFamily: 'Dancing Script',
            }}
          >
            <img className="d-inline-block me-2" alt="Logo" src="/assets/mountains.png" height="28px" width="28px" />
            Alps
          </span>
        </Link>

        {/* navbar-toggler when minimized */}
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-minimize" aria-controls="navbar-minimize" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar navigation elements */}
        <div className="navbar-collapse collapse" id="navbar-minimize">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <i className="bi bi-house-door-fill me-2" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="https://github.com/mdmubin/alps">
                <i className="bi bi-github me-2" />
                Github
              </Link>
            </li>

            {/* login icon / user icon */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="ms-3 bi bi-person-circle" />
              </Link>

              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/login">
                  <i className="bi bi-box-arrow-in-right me-3" />
                  Login
                </Link>
                <Link className="dropdown-item" to="/report">
                  <i className="bi bi-flag me-3" />
                  Submit a report
                </Link>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
