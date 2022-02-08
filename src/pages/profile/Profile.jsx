import React from "react";
import "./profile.css";
import { ProfileNav } from "../../component/profileNav/ProfileNav";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import travis from "../../images/trav.png";
import { Link } from "react-router-dom";
import badge from "../../images/verify.png";
import verify from "../../images/verify.png";
import trav1 from "../../images/trav1.png";
import trav2 from "../../images/trav2.png";
import trav3 from "../../images/trav3.png";
import trav4 from "../../images/trav4.png";
import profile from "../../images/ptrav.png";
import GroupsIcon from "@mui/icons-material/Groups";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SwipeUpAltIcon from "@mui/icons-material/SwipeUpAlt";
import Post from "../../component/post/Post";

export const Profile = () => {
  return (
    <div>
      <ProfileNav />
      <div className="profile-person">
        <div className="profile-image">
          <img src={travis} alt="" />
        </div>
        <div className="profile-params">
          <h3>
            Travis Scott <img src={badge} alt="" />
          </h3>
          <div className="step2">
            <div className="followers">
              <h4>followers</h4>
              <p>17m</p>
            </div>
            <div className="followings">
              <h4>following</h4>
              <p>100</p>
            </div>
            <div className="profile-drags">
              <h4>drags</h4>
              <p>23k</p>
            </div>
          </div>
          <button className="follow-btn">
            Follow <PersonAddIcon className="icon-add" />
          </button>
        </div>
      </div>
      <div className="stats-char">
        <p>
          UTOPIA <QueryStatsIcon className="stats" /> Cactus Jack Record{" "}
          <SwipeUpAltIcon className="green icon40" />
        </p>
      </div>
      <div className="switch">
        <div className="dragsides">
          <p>Drags</p>
        </div>
        <div className="contenders-sides">
          <p>
            Contenders <span>2.5k</span>
          </p>
        </div>
      </div>
      <div className="hero-section">
        <div className="profile-map">
          <div className="profile-set">
            <Link className="mylink" to="">
              <img src={profile} alt="" />
            </Link>
            <h3>Travis scott</h3>
            <img className="img25" src={verify} alt="" />
            <h3 className="h325">@Travis scott</h3>
          </div>
          <div className="post-set">
            <h2 className="drag">
            How do y’all like the travis meals???
            </h2>
            <div className="images">
              <div className="set1">
                <figure className="figure25 figure">
                  <img className="img-post" src={trav1} />
                  <figcaption className="caption">
                    <span>The chip 1</span>
                  </figcaption>
                  <figcaption className="voted">
                    <StarRoundedIcon className="star24" />
                  </figcaption>
                </figure>

                <figure className="figure25 figure">
                  <img className="img-post" src={trav3} />
                  <figcaption className="caption">
                    <span>The 2</span>
                  </figcaption>
                  <figcaption className="voted">
                    <StarRoundedIcon className="star24" />
                  </figcaption>
                </figure>
              </div>
              <div className="set2">
                <figure className="figure25 figure">
                  <img className="img-post" src={trav2} />
                  <figcaption className="caption">
                    <span>The chip</span>
                  </figcaption>
                  <figcaption className="voted">
                    <StarRoundedIcon className="star24" />
                  </figcaption>
                </figure>

                <figure className="figure25 figure">
                  <img className="img-post" src={trav4} />
                  <figcaption className="caption">
                    <span>The sprite</span>
                  </figcaption>
                  <figcaption className="voted">
                    <StarRoundedIcon className="star24" />
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className="vote">
            <span className="vote-btn">
              <StarRoundedIcon className="icon25b" /> Vote this item?
            </span>
            <span className="vote-count">
              <GroupsIcon className="icon25c" /> 7m
            </span>
            <Link className="link25" to=""></Link>
          </div>
          <div className="to-channel">
          <Link className="channel-link" to="/">La casa de papel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
