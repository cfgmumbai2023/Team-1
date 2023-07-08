import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import smilelogo from "./Assets/smilelogo.webp";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navclass">
      <div className="container-fluid">
        <Link className="navbar-brand text-white fs-1 fst-italic" to="/">
          <img
            src={smilelogo}
            className="smilelogo img-fluid mx-5"
            style={{ width: "100px" }}
          />
        </Link>
        <button
          className="navbar-toggler white-button navbarbtn"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="d-end">
          <div
            className={`collapse navbar-collapse ${
              isNavCollapsed ? "" : "show"
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav d-end ml-auto">
            <Link to="/" className="text-black navbar-btn btn-lg">Home</Link>
              <li className="text-black navbar-btn btn-lg">
                Educational Videos
              </li>
              <li className="text-black navbar-btn btn-lg">Login</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
