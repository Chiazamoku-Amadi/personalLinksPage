import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import Profile from "./Components/Profile/Profile";
import Share from "./Components/Share/Share";
import ShareMobile from "./Components/ShareMobile/ShareMobile";
import Links from "./Components/Links/Links";
import Social from "./Components/Social/Social";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
