// src/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="about-content"> {/* New container for the paragraph text */}
        <p>We are committed to providing the best services to our clients.</p>
        <p>Extracurricular activities (ECAs) are activities that take place outside of a student's 
          regular academic coursework and are not required for school or a job. 
          They can be a way to apply academic skills in real-world contexts and can help
          students develop a well-rounded education.
        </p>
      </div>
    </div>
  );
}

export default About;
