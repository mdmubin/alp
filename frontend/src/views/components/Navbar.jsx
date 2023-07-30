import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">

        {/* title + icon */}
        <a className="navbar-brand" href="/">
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
        </a>

        {/* navbar-toggler when minimized */}
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-minimize" aria-controls="navbar-minimize" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar navigation elements */}
        <div className="navbar-collapse collapse" id="navbar-minimize">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                <i className="bi bi-house-door-fill me-2" />
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="https://github.com/mdmubin/alps">
                <i className="bi bi-github me-2" />
                Github
              </a>
            </li>

            {/* login icon / user icon */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">
                <i className="ms-3 bi bi-person-circle" />
              </a>

              <div className="dropdown-menu">
                <a className="dropdown-item" href="/login">
                  <i className="bi bi-box-arrow-in-right me-3" />
                  Login
                </a>
                <a className="dropdown-item" href="/report">
                  <i className="bi bi-flag me-3" />
                  Submit a report
                </a>
              </div>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
