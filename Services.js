// src/Services.js
import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <p>At TalentHub, we offer a variety of services to help you succeed:</p>
      <div className="services-container">
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>UI/UX Design</li>
          <li>Digital Marketing</li>
          <li>Sports</li>
          <li>Art</li>
          <li>Music</li>
          <li>Dance</li>
          <li><strong>Programming Languages like C, C++, Python, Java, JavaScript</strong></li>
          <li><strong>Talent Matching:</strong> Connect with the right opportunities tailored to your skills.</li>
          <li><strong>Skill Development:</strong> Access resources and training to enhance your abilities.</li>
          <li><strong>Networking:</strong> Join our community to meet like-minded individuals and industry leaders.</li>
          <li><strong>Consultation:</strong> Get expert advice to navigate your career path.</li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
