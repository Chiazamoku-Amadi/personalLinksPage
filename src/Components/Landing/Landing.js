import React from "react";
import Profile from "../Profile/Profile";
import Share from "../Share/Share";
import ShareMobile from "../ShareMobile/ShareMobile";
import Links from "../Links/Links";
import Social from "../Social/Social";
import Footer from "../Footer/Footer";

function Landing() {
  return (
    <div>
      <div className="container">
        <section className="profile-section">
          <Profile />
        </section>
        <div className="share-btn">
          <Share />
        </div>
        <div className="share-btn-mobile">
          <ShareMobile />
        </div>
        <section className="links-section">
          <Links />
        </section>
        <section className="social-section">
          <Social />
        </section>
        <footer className="footer-section">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default Landing;
