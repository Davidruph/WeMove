import "bootstrap/dist/css/bootstrap.min.css";
import "./page.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { logo } from "../../assets";
// import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HOME, ABOUT, FEATURES, LOGIN } from "../../routes/constant";

function Header() {
  return (
    <>
      <section className="bg-white">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" />
              </a>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item ms-lg-3">
                    <NavLink
                      to={HOME}
                      exact
                      activeclassname="active"
                      className="menu-links me-5"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to={ABOUT}
                      exact
                      activeclassname="active"
                      className="menu-links me-5"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to={FEATURES}
                      exact
                      activeclassname="active"
                      className="menu-links me-5"
                    >
                      Features
                    </NavLink>
                  </li>
                </ul>
                <div className="d-flex gap-3">
                  <Link className="btn create-btn" to={LOGIN}>
                    Create a Company
                  </Link>
                  <Link className="btn rider-btn" to={"#"}>
                    Become a Driver
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Header;
