import React from "react";
import "./Social.css";
import slack from "../../assets/slack__icon.webp";
import github from "../../assets/github__icon.webp";

function Social() {
  return (
    <>
      <img src={slack} alt="" className="slack-icon" />
      <img src={github} alt="" className="github-icon" />
    </>
  );
}

export default Social;
