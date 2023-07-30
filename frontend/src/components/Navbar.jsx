import React from 'react';
import logo from '../assets/mountains.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">

        {/* title + icon */}
        <a className="navbar-brand" href="/">
          {/* "font-family: 'Dancing Script', cursive;" */}
          <span
            className="justify-content-around"
            style={{
              fontFamily: 'Dancing Script',
            }}
          >
            <img className="d-inline-block me-2" alt="Logo" src={logo} height="32px" width="32px" />
            Alps
          </span>
        </a>

        {/* navbar-toggler when minimized */}
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-minimize" aria-controls="navbar-minimize" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar navigation elements */}
        <div className="navbar-collapse collapse" id="navbar-minimize">
          <ul className="navbar-nav me-auto">

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

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
