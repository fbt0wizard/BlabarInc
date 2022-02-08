import React from "react";
import "./profileNav.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import MessageIcon from "@mui/icons-material/Message";

export const ProfileNav = () => {
  return (
    <div className="profile-nav-wrapper">
      <div className="profile-nav">
        <button className="back-btn">
          <ArrowBackRoundedIcon /> Back
        </button>
        <p>@Travisscott</p>
        <button className="message-btn">
          Message <MessageIcon className="icon34"/>
        </button>
      </div>
    </div>
  );
};
