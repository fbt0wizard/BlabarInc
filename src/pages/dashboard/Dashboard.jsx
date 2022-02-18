import "./dashboard.css";
import logo from "../../images/logo.png";
import timer from "../../images/timer.png";
import ghost from "../../images/ghost.png";
import profilepics from "../../images/profile.png";
import post1 from "../../images/post1.png";
import post2 from "../../images/post2.png";
import commenter from "../../images/comment.png";
import weekend from "../../images/weekend.png";
import React, { useEffect, useState } from "react";
import homeLogo from "../../images/home.png";
import BottomNav from "../../component/buttomNav/BottomNav";
import { useNavigate } from "react-router-dom";
import Nav from "../../component/topNav/Nav";
import Hero from "../../component/hero/Hero";
import PeopleYouFollow from "../../component/peopleYouFollow/PeopleYouFollow";

const Dashboard = ({ loginDetails, verify }) => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState({});
  const [swap, setSwap] = useState(true);


  useEffect(() => {
    document.title = "Dashboard || Blabar";
    if (!loginDetails.logged) {
      navigate("/signin");
      return false;
    }
  }, []);

  useEffect(() => {
    setDatas([
      {
        id: 0,
        choice: null,
        profileImg: profilepics,
        name: "Nezuko",
        badge: verify,
        username: "@nezukoschild",
        drag: "Y'all know i love nezuko..but who was your second favourite character",
        post: [post1, post2],
        post_caption: ["The poster", "The train scene"],
        commenter: commenter,
        channel: "Demon slayer",
        vote: "Vote this item?",
        voters: "7m",
        comments: "873k",
        by_user: "@furball",
        comment_content: "i'll take the train scene anytime",
      },
      {
        id: 1,
        choice: null,
        profileImg: weekend,
        name: "Weeknd",
        badge: verify,
        username: "@theweeknd",
        drag: "Y'all know i love nezuko..but who was your second favourite character",
        post: [post2, post1],
        post_caption: ["Post 2", "The react scene"],
        commenter: profilepics,
        channel: "Money Heist Channel",
        vote: "Vote this item?",
        voters: "1m",
        comments: "102k",
        by_user: "@furball",
        comment_content: "i'll take the train scene anytime",
      },
      {
        id: 2,
        choice: null,
        profileImg: weekend,
        name: "Weeknd",
        badge: verify,
        username: "@theweeknd",
        drag: "Y'all know i love nezuko..but who was your second favourite character",
        post: [post1, post2],
        post_caption: ["Post 2", "The react scene"],
        commenter: profilepics,
        channel: "Money Heist Channel",
        vote: "Vote this item?",
        voters: "1m",
        comments: "102k",
        by_user: "@furball",
        comment_content: "i'll take the train scene anytime",
      }
    ]);
  }, []);

  const handleVote = (username, key, identity) => {
    let construction = { ...datas[identity], vote: "You have voted", choice: key };
    delete datas[identity];
    let newData = [];
    let i=0;
    for(; i<datas.length; i++) {
      if(datas[i] == undefined) {
        newData.push(construction);
      }else {
        newData.push(datas[i])
      }
    }
    setDatas(newData);
  };
  const handleSwap = (e) => {
    if(e.target.innerText == "People you follow") {
      setSwap(false);
    }else{
      setSwap(true);
    }
  };
  

  return (
    <>
        <div className="dashboard">
      <Nav logo={logo} ghost={ghost} timer={timer} handleSwap={handleSwap} swap={swap}/>
      {swap ? (
        <Hero datas={datas} handleVote={handleVote} />
      ) : (
        <PeopleYouFollow />
      )}
    </div>
    <BottomNav home={homeLogo} />
    </>
  );
};

export default Dashboard;
