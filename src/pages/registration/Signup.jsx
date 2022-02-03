import "./registration.css";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import signupLogo from "../../images/signup.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleUser, ernest }) => {
  useEffect(() => {
    document.title = "Sign Up";
  },[]);
  const showPassword = (e) => {
    var element = document.getElementById("password");
    if (element.type == "password") {
      element.type = "text";
      e.target.className = "fa fa-eye-slash";
    } else {
      element.type = "password";
      e.target.className = "fa fa-fw fa-eye field-icon";
    }
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

  const navigate = useNavigate();
  const handleNav = (e) => {
    e.preventDefault();
    navigate("/verify_email");
  };
  return (
    <animated.div style={props}>
      <div className="sign-up">
        <div className="signup-illustration">
          <img src={signupLogo} alt="illustration" />
        </div>
        <h1 className="signup">Sign up</h1>
        <form onSubmit={handleNav}>
          <div className="inputs">
            <label htmlFor="userName">
              Username
              <input
                className="primary-input"
                type="text"
                name="username"
                id="userName"
                autoComplete="off"
                onKeyUp={handleUser}
              />
            </label>
            <br />
            <label htmlFor="email">
              Email
              <input
                className="primary-input"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                onKeyUp={handleUser}
              />
            </label>
            <br />
            <label htmlFor="password">
              Password
              <input
                className="primary-input"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onKeyUp={handleUser}
              />
              <span
                onClick={showPassword}
                className="fa fa-fw fa-eye field-icon "
              ></span>
            </label>
          </div>
          <div className="btn-submit">
            <button className="primary-button" type="submit">
              Sign up
            </button>
          </div>
        </form>
        <div className="nav-to-login">
          <p>
            Already a user? <Link to="/signin">Login</Link>
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default Signup;
