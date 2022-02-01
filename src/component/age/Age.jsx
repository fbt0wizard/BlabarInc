import "./age.css";
import React from "react";
import { useSpring, animated } from "react-spring";
import UserBlabar from "../userBlabar/UserBlabar";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Age = ({ blabar, verify, age, handleAge}) => {
  const props = useSpring({
    to: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    from: {
      opacity: 0,
      transform: "translateX(100%)",
    },
    delay: 500,
  });
  return (
    <animated.div style={props}>
      <div className="age">
        <UserBlabar blabar={blabar} verify={verify} />
        <h3 className="instruction">
          Just click an image and tap the “vote the item” button, so tell me..
          WHATS YOUR GENDER
        </h3>
        <div className="age-section">
            <div className="up-level">
                <div onClick={handleAge}> <StarRoundedIcon className={age === "0-13" ? "choosen" : "none"} /> 0-13</div>
                <div onClick={handleAge}> <StarRoundedIcon className={age === "13-20 yrs" ? "choosen" : "none"} /> 13-20 yrs</div>
            </div>
            <div className="down-level">
                <div onClick={handleAge}> <StarRoundedIcon className={age === "20-40 yrs" ? "choosen" : "none"} /> 20-40 yrs</div>
                <div onClick={handleAge}> <StarRoundedIcon className={age === "40-60 yrs" ? "choosen" : "none"} /> 40-60 yrs</div>
            </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Age;
