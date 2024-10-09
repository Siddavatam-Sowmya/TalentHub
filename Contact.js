// src/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Feel free to reach out with any questions or inquiries!</p>
      <div className="contact-container">
        <ul>
          <li><strong>Contact Number :</strong> +91 1234567890</li>
          <li><strong>E-mail :</strong> talenthub@gmail.com</li>
          <li><strong>WhatsApp number :</strong> 1234567890</li>
          <li><strong>Instagram :</strong> talenthub</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
