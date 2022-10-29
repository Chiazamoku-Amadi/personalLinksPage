import React from "react";
import "./Profile.css";
import profilePicture from "../../assets/profile__img.webp";

function Profile() {
  return (
    <>
      <img
        id="profile__img"
        className="profile-picture"
        src={profilePicture}
        alt=""
      />
      <p id="twitter" className="twitter-username">
        Chiazamoku Amadi
      </p>
      <p id="slack" className="slack-username">
        Chiazamoku Amadi
      </p>
    </>
  );
}

export default Profile;
