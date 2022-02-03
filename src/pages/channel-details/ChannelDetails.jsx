import React from "react";
import "./channelDetails.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import page from "../../images/page.png";
import prof from "../../images/prof.png";

export const ChannelDetails = () => {
  return (
    <div>
      <div className="channel-details"></div>
      <div className="blur">
        <div className="back">
          <button>
            <ArrowBackRoundedIcon />
            Back
          </button>
        </div>
        <div className="content-hero">
          <div className="channel-name">
            <p className="tittle">Money Hiest Channel</p>
            <p className="subscribers">17m + subscribers</p>
          </div>
          <hr />
          <div className="chest-img">
            <img src={page} alt="" />
          </div>
          <div className="text">
            <p>
              Aclassic movie about armed robbers stealing from the bank of
              spain.
            </p>
          </div>
          <div className="user">
            <div className="profile">
              <img src={prof} alt="" />
              <p>Owned by @Mcdonalds</p>
            </div>
            <button>Subscribe</button>
          </div>
          <div className="claim">
            <button>
              <SpaRoundedIcon className="icon31" /> Claim ownership
            </button>
            <button>
              <DriveFileRenameOutlineRoundedIcon className="icon31" /> Edit this
              channel
            </button>
          </div>
          <div className="new-update">
            <p className="seven">7</p>
            <div className="more">
              <p className="simple-text">New updates from</p>
              <p className="mc"> @Mcdonalds</p>
            </div>
          </div>
          <div className="drag-contenders">
            <button className="drag-btn">Drags</button>
            <button className="contenders">Contenders</button>
          </div>
          <div className="the-drag">
            
          </div>
        </div>
      </div>
    </div>
  );
};
