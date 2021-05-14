import React from "react";
import { Link } from "react-router-dom";

const navbar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand mx-3" href="/#">
          ROMATO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-3 text-dark">
          <li class="nav-item px-3">
            <Link class="nav-link text-dark" aria-current="page" to="/login">
              LogIn
            </Link>
          </li>
          <li class="nav-item px-3">
            <Link class="nav-link text-dark" to="/signup">
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
