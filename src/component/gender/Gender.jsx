import "./gender.css";
import { useSpring, animated } from "react-spring";
import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import UserBlabar from "../userBlabar/UserBlabar";

const Gender = ({
  verify,
  blabar,
  male,
  female,
  handleMaleClick,
  handleFemaleClick,
  demo,
  style,
}) => {
  const props = useSpring({
    to: {
      opacity: 1,
      transform: "translateX(0%)"
    },
    from: {
      opacity: 0,
      transform: "translateX(100%)"
    },
    after: {
      opacity: 0,
      transform: "translateX(-100%)"
    },
    delay: 500,
  });
  const lite = {
    border: "3px solid #fff",
  };
  const star = {
    opacity: "1",
  };
  const noStar = {
    opacity: "0",
  };
  return (
    <animated.div style={props}>
      <div className="select-gender">
        <UserBlabar blabar={blabar} verify={verify} />
        <h3 className="instruction">
          Just click an image and tap the “vote the item” button, so tell me..
          WHATS YOUR GENDER
        </h3>
        <div className="choose-gender">
          <figure className="figure26" onClick={handleMaleClick}>
            <img src={male} style={demo.gender === "male" ? style : lite} alt=""/>
            <figcaption className="gender-cap">
              <span>male</span>
            </figcaption>
            <figcaption
              className="male"
              style={demo.gender === "male" ? star : noStar}
            >
              <StarRoundedIcon className="icon19" />
            </figcaption>
          </figure>
          <figure className="figure26" onClick={handleFemaleClick}>
            <img src={female} style={demo.gender === "female" ? style : lite} alt=""/>
            <figcaption className="gender-cap">
              <span>female</span>
            </figcaption>
            <figcaption
              className="female"
              style={demo.gender === "female" ? star : noStar}
            >
              <StarRoundedIcon className="icon19" />
            </figcaption>
          </figure>
        </div>
        <div className="vote">
          <span className="vote-btn">
            <StarRoundedIcon className="yellowicon" /> {demo.vote}
          </span>
          <span className="vote-count">
            <GroupsIcon className="icon4" /> 7m
          </span>
        </div>
      </div>
    </animated.div>
  );
};

export default Gender;
