import React from 'react';

import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-5">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

        <Link className="navbar-brand" to="/">Checkpoint</Link>

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Início</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/checkpoint">Registros</Link>
          </li>
        </ul>

      </div>

    </nav>
  );
}

export default Header;