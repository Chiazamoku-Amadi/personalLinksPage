import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreed: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="contact-me">
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form className="form">
        <section className="name-fields">
          <div className="field">
            <label htmlFor="first_name">First name</label>
            <input
              id="first_name"
              type="text"
              placeholder="Enter your first name"
              className="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="last_name">Last name</label>
            <input
              id="last_name"
              type="text"
              placeholder="Enter your last name"
              className="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </section>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="yourname@email.com"
            className="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="checkbox">
          <input
            id="checkbox"
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <label htmlFor="checkbox">
            You agree to providing your data to Chiazamoku who may contact you.
          </label>
        </div>
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
