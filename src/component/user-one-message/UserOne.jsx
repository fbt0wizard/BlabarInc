import React from "react";
import "./userOne.css";

export const UserOne = ({ item }) => {
  console.log(item);
  return (
    <div className="chat-box-wrapper">
      <div className="chat-box">
        <p>{item.content}</p>
      </div>
    </div>
  );
};
