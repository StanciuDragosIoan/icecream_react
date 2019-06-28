import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <h1>
        <Link className="navbar-brand text-light" to="/">
          IceCream <i className="fa fa-star-o" />
        </Link>
      </h1>
      <button
        className="navbar-toggler  text-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link text-light" to="/addicecream">
            Add IceCream
          </Link>
          <Link className="nav-item nav-link text-light" to="/buyicecream">
            Buy IceCream
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
