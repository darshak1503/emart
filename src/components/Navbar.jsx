import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 fc-dark text-dark" to="#">
            Ashion
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/products">WOMEN</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/products">MEN'S</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/products">SHOP</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/pages">PAGES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/blog">BLOG</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/contact">CONTACT</NavLink>
              </li>
            </ul>
            <div className="butttons">
              
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="/registor" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
