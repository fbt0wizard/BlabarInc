import "./home.css";
import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import illustration from "../../images/illustration.png";
// import DownloadApp from "../../component/downloadApp/DownloadApp";
import { useNavigate } from "react-router-dom";

function Home() {
  const [pop, setPop] = useState({});

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/signup");
  };
  
  useEffect(() => {
    const myTimeout = setTimeout(firepop, 2000);
  },[]);
  const firepop = () => {
    setPop({ transform: "translateY(0%)" });
  };

  return (
    <div>
      <div>
        <header className="header">
          <img src={logo} alt="Blabaer logo" />
        </header>
        <div className="headline">
          <h1>BLAB ABOUT {"\n"} EVERYTHING</h1>
        </div>
        <div className="illustration">
          <img src={illustration} alt="Blaber illustration" />
        </div>
        <div className="action-btn">
          <div className="buttonStyle">
            <i className="fab fa-google"></i> <span>Sign up with google</span>
          </div>
          <div className="buttonStyle">
            <i className="fab fa-facebook"></i>{" "}
            <span> Sign up with facebook</span>
          </div>
          <div onClick={handleClick} className="buttonStyle">
            {" "}
            <span> Sign up with phone or email</span>
          </div>
        </div>
        <p className="go-to-login">
          Already have an account?{" "}
          <span>
            <a href="#">Login</a>
          </span>
        </p>
        {/* <DownloadApp pop={pop} setPop={setPop} /> */}
      </div>
    </div>
  );
}

export default Home;
