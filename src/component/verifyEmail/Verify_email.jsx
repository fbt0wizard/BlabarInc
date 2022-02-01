import { useSpring, animated } from "react-spring";
import React from "react";
import { useNavigate } from "react-router-dom";

const Verify_email = ({ logo, email }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/how_to");
  };

  const props = useSpring({
    to: {
      opacity: 1,
      transform: "translateX(0%)"
    },
    from: {
      opacity: 0,
      transform: "translateX(-100%)"
    },
    delay: 400,
  });

  return (
    <animated.div style={props}>
      <div>
        <header
          style={{ width: "max-content", margin: "auto", marginTop: "2rem" }}
        >
          <img src={logo} alt="Blabaer logo" />
        </header>
        <div
          className="hero"
          style={{ width: "max-content", margin: "auto", marginTop: "2rem" }}
        >
          <h2 style={{ fontSize: 27 }}>
            We just send a <br /> six digit code to <br /> your email
          </h2>
        </div>
        <p style={userEmail}>{email}</p>

        <div className="inputs">
          <label htmlFor="verification">
            <input
              className="primary-input"
              type="text"
              name="verification"
              id="verification"
              autoComplete="off"
              placeholder="6 digit code"
            />
          </label>
        </div>
        <div className="btn-submit">
          <button
            className="primary-button"
            type="submit"
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      </div>
    </animated.div>
  );
};
const userEmail = {
  background: "rgba(196, 196, 196, 0.63)",
  width: "max-content",
  padding: "11px 27px",
  margin: "2rem auto 0rem auto",
  fontSize: 15,
  borderRadius: 30,
};

export default Verify_email;
