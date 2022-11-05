import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <div className="container">
      <Outlet />
      <footer className="footer-section">
        <Footer />
      </footer>
    </div>
  );
}

export default Landing;
