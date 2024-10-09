// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import your CSS for styling

function Register(props) {
  const navigate = useNavigate(); // Initialize useNavigate
  const [successMessage, setSuccessMessage] = useState('');

  // Get the setRegisteredEvents from props
  const { setRegisteredEvents } = props.location.state || {};

  // Sample events data
  const events = [
    { name: "Creative Writing", date: "02-10-24", location: "R 407B" },
    { name: "Coding", date: "02-10-24", location: "C325" },
    { name: "Swimming", date: "02-10-24", location: "Indoor Stadium" },
    { name: "Photography", date: "02-10-24", location: "C425" },
    { name: "Public Speaking", date: "02-10-24", location: "Seminar Hall" }
  ];

  const handleRegister = (event) => {
    if (setRegisteredEvents) {
      // Add event to registered events
      setRegisteredEvents(prevEvents => [...prevEvents, event]);
      setSuccessMessage('Successfully registered for ' + event.name);
  
      // Navigate back to Activities page after a delay
      setTimeout(() => {
        navigate('/'); // Redirect back to Activities page
      }, 2000); // Optional: Delay for 2 seconds to show success message
    } else {
      console.error("setRegisteredEvents is not available.");
    }
  };

  return (
    <div className="register-container">
      <h1>Event Registration</h1>
      {successMessage && <p>{successMessage}</p>}
      <table className="events-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Register</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>
                <button onClick={() => handleRegister(event)}>Register</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Register;
