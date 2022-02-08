import "./post.css";
import React from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import papel from "../../images/papel.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import verify from "../../images/verify.png";
import papel1 from "../../images/papel1.png";
import papel2 from "../../images/papel2.png";

export const Post = () => {
  return (
    <div className="hero-section">
      <div className="mapped mapped-two">
        <div className="profile-set">
          <Link className="mylink" to="">
            <img src={papel} alt="" />
          </Link>
          <h3>La casa de papel</h3>
          <img className="img25" src={verify} alt="" />
          <h3 className="h325">@papel</h3>
          <button className="btn25">
            <MoreVertIcon className="icon25" />
          </button>
        </div>
        <div className="post-set">
          <h2 className="drag">
            YOO...yall seen the new money heist cover yet?
          </h2>
          <div className="images">
            <figure
              className="figure25 figure"
            >
              <img className="img-post"  src={papel1} />
              <figcaption className="caption">
                <span>The first poster</span>
              </figcaption>
              <figcaption className="voted">
                <StarRoundedIcon className="star24" />
              </figcaption>
            </figure>

            <figure
              className="figure25 figure"
            >
              <img className="img-post"  src={papel1} />
              <figcaption className="caption">
                <span>The second poster</span>
              </figcaption>
              <figcaption className="voted">
                <StarRoundedIcon className="star24" />
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="vote">
          <span className="vote-btn">
            <StarRoundedIcon className="icon25b" />
          </span>
          <span className="vote-count">
            <GroupsIcon className="icon25c" />
          </span>
          <Link className="link25" to=""></Link>
        </div>
        <div className="comments-section">
          <div className="comment-counts">
            <p className="p25">comments</p>
            <span className="span25b">
              <ChatOutlinedIcon className="icon25e" />
            </span>
          </div>
          <div className="comment-content">
            <img className="img25b" src="" />
            <span className="span25f"></span>
            <span className="span25e"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
