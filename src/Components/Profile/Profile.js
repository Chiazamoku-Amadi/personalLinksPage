import React from "react";
import "./Profile.css";
import profilePicture from "../../assets/profile__img.webp";
import camera from "../../assets/camera__icon.webp";

function Profile() {
  return (
    <>
      <div className="picture-container">
        <img
          src={profilePicture}
          alt=""
          id="profile__img"
          className="profile-picture"
        />
        <div className="overlay fadeEffect">
          <img
            src={camera}
            alt=""
            id="profile__img"
            className="profile-picture"
          />
        </div>
      </div>
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
