import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError(true);
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    // Handle form submission here
    // You can use an API or any other method to handle the form data

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setError(false);
    setEmailError(false);
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="contactContainer">
      <h2>Contact</h2>
      <form className="contactForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        {error && <p className="errorMessage">Please fill in all fields.</p>}
        {emailError && (
          <p className="errorMessage">Please enter a valid email address.</p>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
