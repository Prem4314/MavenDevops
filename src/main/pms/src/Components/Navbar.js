import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-4" to="/">
          Petition Management System
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/CreatePetition">
                Create Petition
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ViewPetitions">
                View All Petitions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/AddUser">
                Register User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/ViewUsers">
                View All Users
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
