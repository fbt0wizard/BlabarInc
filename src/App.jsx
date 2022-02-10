import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, doc, getDocs } from "firebase/firestore";
import Home from "./pages/home/Home";
import Signup from "./pages/registration/Signup";
import SignIn from "./pages/sign-in/SignIn";
import logo from "./images/logo.png";
import verify from "./images/verify.png";
import blabar from "./images/blabar.png";
import bio from "./images/bio.png";
import male from "./images/male.png";
import female from "./images/female.png";
import Verify_email from "./component/verifyEmail/Verify_email";
import Dashboard from "./pages/dashboard/Dashboard";
import Howto from "./component/howTo/Howto";
import Bio from "./component/bio/Bio";
import { Channel } from "./pages/channel/Channel";
import { ChannelDetails } from "./pages/channel-details/ChannelDetails";
import { Profile } from "./pages/profile/Profile";
import { ChannelExpand } from "./pages/channel-expand/ChannelExpand";
import { SearchPage } from "./pages/search-page/SearchPage";
import { Message } from "./pages/message/Message";

function App() {

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    username: "",
    gender: "",
    age: ""
  });
  const [loginDetails, setloginDetails] = useState({
    password: "blabar123",
    username: "blabar",
    logged: false,
    error: "",
  });
  const [scroll, setScroll] = useState(0);

  const usersCollectionRef = collection(db, "users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      const refined = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      console.table(refined)
    }
    getUsers();

  },[])


  const handleSwipe = () => {
      setScroll(scroll + 1)
  };
  const dotSwipe = (digit) => {
    setScroll(digit)
  };

  const handleAge = (e) => {
    setUserDetails({ ...userDetails, age: e.target.innerText });
    setTimeout(function () {
      handleSwipe();
    }, 1000);
  }

  const handleUser = (e) => {
    if (e.target.name == "email") {
      const { value } = e.target;
      setUserDetails({ ...userDetails, email: value });
    } else if (e.target.name == "username") {
      const { value } = e.target;
      setUserDetails({ ...userDetails, username: value });
    } else if (e.target.name == "password") {
      const { value } = e.target;
      setUserDetails({ ...userDetails, password: value });
    }
  };
  const authUser = () => {
    setloginDetails({ ...loginDetails, logged: true, error: "" });
  };

  const handleError = () => {
    setloginDetails({
      ...loginDetails,
      error: "incorect username or password",
    });
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup handleUser={handleUser}/>} />
        <Route
          path="/signin"
          element={
            <SignIn
              loginDetails={loginDetails}
              handleUser={handleUser}
              userDetails={userDetails}
              authUser={authUser}
              handleError={handleError}
            />
          }
        />
        <Route
          path="/verify_email"
          element={<Verify_email logo={logo} email={userDetails.email} />}
        />
        <Route
          path="/how_to"
          element={
            <Howto
              logo={logo}
              verify={verify}
              blabar={blabar}
              male={male}
              female={female}
              handleSwipe={handleSwipe}
              scroll={scroll}
              age={userDetails.age}
              handleAge={handleAge}
              dotSwipe={dotSwipe}
            />
          }
        />
        <Route path="/bio" element={ <Bio bio={bio} authUser={authUser}/> } />
        <Route path="/channel" element={ <Channel /> } />
        <Route path="/channel-details" element={ <ChannelDetails /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/channel-expand" element={ <ChannelExpand /> } />
        <Route path="/search" element={ <SearchPage /> } />
        <Route path="/message" element={ <Message /> } />
        <Route
          path="/dashboard"
          element={<Dashboard loginDetails={loginDetails} verify={verify} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
