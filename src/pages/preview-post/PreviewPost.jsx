import React from "react";
import "./previewPost.css";
import { Back } from "../../component/back/Back";
import profilepics from "../../images/profile.png";
import { UserHeader } from "../../component/user-header/UserHeader";
import postp from "../../images/postp.png";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import prev1 from "../../images/prev1.png";
import prev2 from "../../images/prev2.png";
import prev3 from "../../images/prev3.png";
import { SwitchImg } from "../../component/switch-img/SwitchImg";

export const PreviewPost = () => {
  return (
    <div className="preview-post">
      <div className="preview-wrapper">
        <Back />
        <div className="user-profile-header">
          <UserHeader
            profile={profilepics}
            name={"Nezuko"}
            username={"@Nezukoschild"}
            dark={true}
          />
        </div>
        <h3 className="post-tittle">
          who do you like the most in stranger things
        </h3>
        <div className="post-display">
          <img src={postp} alt="" />
        </div>
        <div className="input-caption">
          <label htmlFor="inputCaption"><InsertPhotoIcon />
            <input type="text" placeholder="Add a caption..." />
          </label>
        </div>
        <div className="upload-button">
          <button><ArrowUpwardIcon className="upload-arrow"/> Upload</button>
        </div>
        <div className="preview-image">
          <SwitchImg image={prev1}/>
          <SwitchImg image={prev2}/>
          <SwitchImg image={prev3}/>
        </div>
      </div>
    </div>
  );
};
