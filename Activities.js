// src/Activities.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Activities.css'; // Optional CSS for activities styling

function Activities() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [registeredEvents, setRegisteredEvents] = useState([]);

  // Function to handle button click
  const handleRegisterClick = () => {
    navigate('/register', { state: { setRegisteredEvents } }); // Pass state updater function to Register page
  };

  return (
    <div className="container" style={{ backgroundImage: 'url()' }}>
      <div className="grid-container">
        <div className="grid-item">
          <h2>Upcoming Events</h2>
          <ul>
            {registeredEvents.length > 0 ? (
              registeredEvents.map((event, index) => (
                <li key={index}>
                  {event.name} - {event.date} at {event.location}
                </li>
              ))
            ) : (
              <p>No upcoming events.</p>
            )}
          </ul>
        </div>
        <div className="grid-item">
          <h2>My Activities</h2>
          <p>Track personal extracurricular involvement</p>
        </div>
        <div className="grid-item">
          <h2>Event Registration</h2>
          <button className="register-btn" onClick={handleRegisterClick}>
            Register here
          </button>
        </div>
        <div className="grid-item notification">
          <img 
            src="https://i.pinimg.com/564x/be/ec/af/beecafb48ec867e3981ff93dd5609ec9.jpg" 
            alt="Notifications" 
            className="bell-icon" 
          />
          <h2>Notifications</h2>
          <span className="badge">1</span>
        </div>
      </div>
    </div>
  );
}

export default Activities;
