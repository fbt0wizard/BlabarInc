import "./sign-in.css";
import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import signinLogo from "../../images/signin.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignIn = ({
  handleUser,
  loginDetails,
  userDetails,
  authUser,
  handleError,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sign In";
  },[]);

  const props = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    delay: 400,
  });

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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userDetails.username == loginDetails.username &&
      userDetails.password == loginDetails.password
    ) {
      authUser();
      navigate("/dashboard");
    } else {
      handleError();
    }
  };

  return (
    <animated.div style={props}>
      <div className="sign-up">
        <h2 className="head">Welcome Back!</h2>
        <div className="signup-illustration">
          <img src={signinLogo} alt="illustration" />
        </div>
        <h1 className="login">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <label htmlFor="userName">
              Username
              <input
                className="primary-input"
                type="text"
                name="username"
                id="userName"
                autoComplete="off"
                placeholder="username or email"
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
                placeholder="password"
                onKeyUp={handleUser}
              />
              <span
                onClick={showPassword}
                className="fa fa-fw fa-eye field-icon "
              ></span>
            </label>
            <p id="error">{loginDetails.error}</p>
          </div>
          <div className="btn-submit">
            <button className="primary-button" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="nav-to-login">
          <p>forgot password ?</p>
          <p>
            No account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </animated.div>
  );
};

export default SignIn;
