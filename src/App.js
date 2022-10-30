import "./App.css";
import Profile from "./Components/Profile/Profile";
import Share from "./Components/Share/Share";
import ShareMobile from "./Components/ShareMobile/ShareMobile";
import Links from "./Components/Links/Links";
import Social from "./Components/Social/Social";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
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
  );
}

export default App;
