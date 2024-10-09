// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Activities from './Activities';
import SignUp from './SignUp';
import Login from './Login';
import Register from './Register'; // Make sure to import Register
import UpcomingEvents from './UpcomingEvents'; // Import UpcomingEvents
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar will stay on top */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
          <Route path="/services" element={<Services />} /> {/* Services page */}
          <Route path="/activities" element={<Activities />} /> {/* Activities page */}
          <Route path="/register" element={<Register />} /> {/* Registration page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/signup" element={<SignUp />} /> {/* SignUp page */}
          <Route path="/upcoming-events" element={<UpcomingEvents />} /> {/* Upcoming Events page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
