import React, { useState } from "react";
import "../styles/Contact.css";
import "../styles/Modal.css"
import ContactLeft from "../assets/ContactLeft.jpg";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactLeft})` }}
      ></div>

      <div className="rightSide">
        <h1>Contact Us</h1>
        <p>All expressions of interest need to be sent below!</p>
        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Thank you for contacting us!</h2>
              <p>We will get back to you as soon as possible.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
