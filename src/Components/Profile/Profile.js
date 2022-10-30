import React from "react";
import "./Profile.css";
import profilePicture from "../../assets/profile__img.webp";

function Profile() {
  return (
    <>
      <img
        src={profilePicture}
        alt=""
        id="profile__img"
        className="profile-picture"
      />
      <p id="twitter" className="twitter-username">
        aza_jenny25
      </p>
      <p id="slack" className="slack-username">
        Chiazam
      </p>
    </>
  );
}

export default Profile;
