import React from "react";
import "./Footer.css";
import zuriLogo from "../../assets/Zuri.Internship_Logo.webp";
import I4GLogo from "../../assets/I4G.webp";

function Footer() {
  return (
    <section className="inner-section-footer">
      <img src={zuriLogo} alt="" />
      <p className="footer-text">HNG Internship 9 Frontend Task</p>
      <img src={I4GLogo} alt="" />
    </section>
  );
}

export default Footer;
