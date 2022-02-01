import React from "react";
import UserBlabar from "../userBlabar/UserBlabar";
import { useSpring, animated } from "react-spring";
import { useNavigate } from "react-router-dom";

const Location = ({ verify, blabar }) => {
  const country = [
    {
      id: 1,
      region: "Nigeria",
    },
    {
      id: 2,
      region: "Canada",
    },
    {
      id: 3,
      region: "Ghana",
    },
    {
      id: 4,
      region: "France",
    },
  ];
  const gotoBio = (e) => {
    e.preventDefault()
    navigate("/bio");
  }
  const navigate = useNavigate();

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
      <div className="select-location">
        <UserBlabar blabar={blabar} verify={verify} />
        <h3 className="instruct">What country are you from</h3>
        <div className="data-section">
          <form>
            <label htmlFor="country">
              <input
                type="search"
                name="country"
                list="data"
                id="country"
                autoComplete="off"
              />
            </label>
            <datalist id="data">
              {country.map((item, i) => (
                <option key={i} value={item.region} />
              ))}
            </datalist>
            <div className="button">
              <button type="submit" onClick={gotoBio} className="blue-btn">I live here</button>
            </div>
          </form>
        </div>
      </div>
    </animated.div>
  );
};

export default Location;
