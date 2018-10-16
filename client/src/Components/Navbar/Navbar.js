import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => (
  <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">New York Times Scraper</h1>
        <p className="lead">Search for and annotate articles of interest!</p>
      </div>
    </div>
  <ul className="nav nav-tabs container">
    <li className="nav-item">
      <Link
        to="/search"
        className={
          window.location.pathname === "/search"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Search
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/saved"
        className={
          window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
        }
      >
        Saved
      </Link>
    </li>
  </ul>
  </div>
);

export default Navbar;
