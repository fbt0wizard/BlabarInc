import React from "react";
import "./userHeader.css";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const UserHeader = ({ profile, name, username, badge, dark }) => {
  return (
    <div className="profile-set">
      <Link className="mylink" to="">
        <img src={profile} alt="" />
      </Link>
      <h3 className={dark? "dark-text": null}>{name}</h3>
      <img className="img25" src={badge} alt="" />
      <h3 className={dark? "h325 dark-text" : "h325"}>{username}</h3>
      <button className={dark?"hide":"btn25"}>
        <MoreVertIcon className="icon25" />
      </button>
    </div>
  );
};
