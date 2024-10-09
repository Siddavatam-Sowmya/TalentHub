import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">TalentHub</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>  {/* Link to the Home page */}
        <li><Link to="/about">About</Link></li>  {/* Link to the About page */}
        <li><Link to="/services">Services</Link></li>  {/* You can create a Services page */}
        <li><Link to="/contact">Contact</Link></li>  {/* Link to the Contact page */}
        <li><Link to="/activities">Activities</Link></li>  {/* Link to the Activities page */}
        <li><Link to="/login" className="login-btn">Login</Link></li>  {/* Link to the Login page */}
       {/*<li><Link to="/signup" className="signup-btn">SignUp</Link></li>  {/* Link to the SignUp page */}
      </ul>
    </nav>
  );
}

export default Navbar;
