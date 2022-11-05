import React from "react";
import "./Contact.css";

function Contact() {
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
            />
          </div>
          <div className="field">
            <label htmlFor="last_name">Last name</label>
            <input
              id="last_name"
              type="text"
              placeholder="Enter your last name"
              className="last-name"
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
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            rows={5}
          />
        </div>
        <div className="checkbox">
          <input id="checkbox" type="checkbox" />
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
