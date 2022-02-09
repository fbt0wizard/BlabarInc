import React from "react";
import "./searchPage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import searchProfile from "../../images/search.png";
import SearchIcon from "@mui/icons-material/Search";
import person from "../../images/searchprofile.png";
import ChatIcon from '@mui/icons-material/Chat';
import { SearchResult } from "../../component/search-result/SearchResult";

export const SearchPage = () => {
  const result = [
    {
      id: 1,
      pic: person,
      display_name: "Cruzman",
      username: "@cruzzy",
      comment: "Like this me im tired of the show sef",
      count: 1,
    },
    {
      id: 2,
      pic: person,
      display_name: "Cruzman",
      username: "@cruzzy",
      comment: "Like this me im tired of the show sef",
      count: 1,
    },
    {
      id: 3,
      pic: person,
      display_name: "Cruzman",
      username: "@cruzzy",
      comment: "Like this me im tired of the show sef",
      count: 1,
    },
    {
      id: 4,
      pic: person,
      display_name: "Cruzman",
      username: "@cruzzy",
      comment: "Like this me im tired of the show sef",
      count: 1,
    },
  ];
  return (
    <div>
      <div className="mini-nav">
        <ArrowBackIcon className="arrow-back" />
        <img src={searchProfile} alt="" />
      </div>
      <div className="light-search">
        <label htmlFor="search-input">
          <input
            type="search"
            name="search"
            placeholder="search for something..."
          />
          <SearchIcon className="search-icon black" />
        </label>
      </div>
      <div className="chat-head">
        <h1>Chats</h1>
      </div>
      <div className="result-content-component">
        {result.map((item, i) => (
          <SearchResult item={item} key={i} />
        ))}
      </div>
      <div className="new-msg">
          <button><ChatIcon className="icon50"/> New message</button>
      </div>
    </div>
  );
};
