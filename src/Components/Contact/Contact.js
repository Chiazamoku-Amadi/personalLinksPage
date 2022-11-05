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
            />
          </div>
          <div className="field">
            <label htmlFor="last_name">Last name</label>
            <input
              id="last_name"
              type="text"
              placeholder="Enter your last name"
            />
          </div>
        </section>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="yourname@email.com" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          />
        </div>
      </form>
    </div>
  );
}

export default Contact;
