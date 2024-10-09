// src/UpcomingEvents.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './UpcomingEvents.css'; // Ensure this import is correct

function UpcomingEvents() {
  const location = useLocation();
  const registeredEvents = location.state?.registeredEvents || []; // Get registered events from location state

  return (
    <div className="upcoming-events-container">
      <h1>Upcoming Events</h1>
      {registeredEvents.length > 0 ? (
        <table className="events-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {registeredEvents.map((event, index) => (
              <tr key={index}>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No events registered yet.</p>
      )}
    </div>
  );
}

export default UpcomingEvents;
