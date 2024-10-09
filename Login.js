import React from 'react';
import './Login.css'; // Import your CSS
import logo from './talenthub-logo.jpg'; // Import your logo
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="TalentHub Logo" className="logo" />
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Enter Email ID" required />
          <input type="password" placeholder="Enter Password" required />
          <p className="forgot-password">Forget Password?</p>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="signup-text">
          New Here? <Link to="/signup" className="signup-link">Signup</Link> {/* Use Link for navigation */}
        </p>
      </div>
    </div>
  );
}

export default Login;
