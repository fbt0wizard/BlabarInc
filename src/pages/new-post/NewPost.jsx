import React from "react";
import "./newPost.css";
import { Back } from "../../component/back/Back";
import { Poll } from "../../component/poll/Poll";
import poll from '../../images/textpoll.png';
import imgpoll from "../../images/imagepoll.png"
import vpoll from "../../images/vpoll.png"

export const NewPost = () => {
  return (
    <div>
      <Back />
      <div className="head-text">
        <h1>
          What do you want to
          <br /> post
        </h1>
      </div>
      <Poll poll={poll}/>
      <Poll poll={imgpoll}/>
      <Poll poll={vpoll} vid={'red'}/>
    </div>
  );
};
