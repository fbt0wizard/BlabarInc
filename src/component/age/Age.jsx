import "./age.css";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import UserBlabar from "../userBlabar/UserBlabar";
import { AgeButton } from "../age-button/AgeButton";
import {manageAge} from "../../data";

const Age = ({ blabar, verify, age, handleAge}) => {
  const [ageData, setAgeData] = useState([])

  useEffect(() => {
    setAgeData(manageAge)
  }, [])
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

  const selectAge = (id) => {
    let newState = ageData;
    let prep = [];
    newState.map((item, i) => {
      if(item.id == id) {
        item.selected = true;
        prep.push(item)
      }else {
        item.selected = false;
        prep.push(item)
      }
    })
    setAgeData(prep)
  }

  return (
    <animated.div style={props}>
      <div className="age">
        <UserBlabar blabar={blabar} verify={verify} />
        <h3 className="instruction">
          Just click an image and tap the “vote the item” button, so tell me..
          WHATS YOUR GENDER
        </h3>
        <div className="age-section">
          {ageData.map((item, i) =>(
              <AgeButton key={i} item={item} selectAge={selectAge}/>
          ) )}
        </div>
      </div>
   </animated.div>
  );
};

export default Age;
