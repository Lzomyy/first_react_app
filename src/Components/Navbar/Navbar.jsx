import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg color">
          <div className="container">
            <Link className="navbar-brand fs-2 fw-bold text-white" to="">
              START FRAMEWORK
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse flex-row-reverse "
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item p-4 text-white fw-bold">
                  <Link
                    className="nav-link text-white active"
                    aria-current="page"
                    to="about"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item p-4 text-white fw-bold">
                  <Link className="nav-link text-white" to="portfolio">
                    PORTFOLIO
                  </Link>
                </li>
                <li className="nav-item p-4 text-white fw-bold">
                  <Link className="nav-link text-white" to="contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
