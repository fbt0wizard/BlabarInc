import React from "react";
import "./channelExpand.css";
import CloseIcon from "@mui/icons-material/Close";
import profile from "../../images/ptrav.png";
import verify from "../../images/verify.png";
import comment from "../../images/comment.png";
import main from "../../images/main.png";
import { Link } from "react-router-dom";
import GroupsIcon from "@mui/icons-material/Groups";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";

export const ChannelExpand = () => {
  return (
    <div className="background">
      <div className="close-page">
        <CloseIcon className="close-icon" />
      </div>
      <div className="profile-top">
        <div className="profile-set">
          <Link className="mylink" to="">
            <img src={profile} alt="" />
          </Link>
          <h3 className="name">Travis scott</h3>
          <img className="img25 on-profile" src={verify} alt="" />
          <h3 className="h325 name">@Travis scott</h3>
        </div>
        <div className="caption-set">
          <h3>How do y’all like the travis meals???</h3>
        </div>
      </div>
      <div className="swipe-dash">
        <div className="swipe1 swipe-active"></div>
        <div className="swipe2"></div>
        <div className="swipe3"></div>
        <div className="swipe4"></div>
      </div>
      <div className="main-image">
        <img src={main} alt="" />
      </div>
      <div className="vote">
        <span className="vote-btn vote-btn-margin">
          <StarRoundedIcon className="icon25b" /> Vote this item?
        </span>
        <span className="vote-count-white">
          <GroupsIcon className="icon25c" /> 7m
        </span>
        <Link className="link25" to=""></Link>
      </div>
      <div className="to-channel">
        <Link className="channel-link-white" to="/">
          Travis meal channel
        </Link>
      </div>
      <div className="comments-section">
        <div className="comment-counts">
          <p className="p25-dark">comments</p>
          <span className="span25b white">
            873k
            <ChatOutlinedIcon className="icon25e icon25e-margin" />
          </span>
        </div>
        <hr />
        <div className="comment-content comment-content-margin">
          <img className="img25b" src={comment} />
          <span className="span25f white">furball</span>
          <span className="span25e white">i’ll take the train scene anytime</span>
        </div>
        <hr />
      </div>
      <div className="link-to-main-post">
          <Link to="/">View main post</Link>
      </div>
    </div>
  );
};
