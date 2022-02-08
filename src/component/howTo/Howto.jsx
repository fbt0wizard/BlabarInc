import './howTo.css';
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Age from "../age/Age";
import Gender from "../gender/Gender";
import Location from "../location/Location";

const Howto = ({ logo, verify, blabar, male, female, handleSwipe, scroll, age, handleAge, dotSwipe }) => {
  const [demo, setDemo] = useState({
    gender: "",
    vote: "Vote this item?",
    voted: false,
  });
  const [style, setStyle] = useState({});

  useEffect(() => {
    document.title = "Update your data";
  },[]);

  const handleMaleClick = () => {
    setDemo({ ...demo, gender: "male", vote: "You have voted" });
    setStyle({ ...style, border: "3px solid blue" });
    setTimeout(function () {
      handleSwipe();
    }, 500);
  };
  const handleFemaleClick = () => {
    setDemo({ ...demo, gender: "female", vote: "You have voted" });
    setStyle({ ...style, border: "3px solid blue" });
    setTimeout(function () {
      handleSwipe();
    }, 500);
  };

  const props = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    delay: 400,
  });

  const dot = {
    background: "blue",
    width: 15,
    height: 15,
  };

  return (
    <animated.div style={props}>
      <div>
        <header className="hero">
          <img src={logo} alt="Blabaer logo" />
        </header>
        <div className="hero">
          <h2 className="h2">
            Lets show you how <br /> Blabar works
          </h2>
        </div>
        {scroll == 0 ? (
          <Gender
            verify={verify}
            blabar={blabar}
            male={male}
            female={female}
            handleMaleClick={handleMaleClick}
            handleFemaleClick={handleFemaleClick}
            demo={demo}
            style={style}
          />
        ) : null}
        {scroll == 1 ? <Age blabar={blabar} verify={verify} age={age} handleAge={handleAge}/> : null}
        {scroll == 2 ? <Location verify={verify} blabar={blabar} /> : null }
        <div className="dots">
          <div style={scroll == 0 ? dot : null} onClick={() => {dotSwipe(0)}}></div>
          <div style={scroll == 1 ? dot : null} onClick={() => {dotSwipe(1)}}></div>
          <div style={scroll == 2 ? dot : null} onClick={() => {dotSwipe(2)}}></div>
        </div>
      </div>
    </animated.div>
  );
};

export default Howto;
