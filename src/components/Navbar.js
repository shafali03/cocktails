import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="logo cocktails" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar