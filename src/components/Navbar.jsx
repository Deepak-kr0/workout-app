
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/Fitlogo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          
          <div className="nav-left">
            <img src={logo} alt="Logo" className="logo-img" />
            
            <h2 className="logo-text">GrindFuel</h2>
          </div>

         
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/log-workout" onClick={() => setMenuOpen(false)}>Workout</Link></li>
            <li><Link to="/progress" onClick={() => setMenuOpen(false)}>Progress</Link></li>
            <li><Link to="/diet" onClick={() => setMenuOpen(false)}>Diet</Link></li>
          </ul>

          
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div className="main-content"></div>
    </>
  );
};

export default Navbar;

