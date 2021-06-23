import React from "react";
import { Link } from "react-router-dom";
import '../../styles/global.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-info d-flex ">
      <span className="navbar-brand mb-0 ps-3">
      <Link to={'/admin'} className="white">
      <h1 >Administration</h1>
      </Link>
        
      </span>
    </nav>
  );
}
