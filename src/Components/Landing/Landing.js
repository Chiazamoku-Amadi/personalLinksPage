import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <div>
      <div className="container">
        <Outlet />
        <footer className="footer-section">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Landing;
