import React from "react";
import "./message.css";
import { MessageBottom } from "../../component/message-bottom/MessageBottom";
import { MesageHead } from "../../component/message-head/MesageHead";
import chathead from "../../images/chathead.png";
import { UserTwo } from "../../component/user-two-message/UserTwo";
import { UserOne } from "../../component/user-one-message/UserOne";

export const Message = () => {
  const message = [
    {
      id: 1,
      owner: true,
      image: chathead,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero at gravida morbi tortor metus scelerisque. Non eu massa arcu sit nunc orci. Dolor quis aliquam neque molestie nec, sit faucibus. ",
    },
    {
      id: 2,
      owner: false,
      content: "Pulvinar viverra phasellus nibh et.",
    },
    {
      id: 3,
      owner: true,
      image: chathead,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue et sit suspendisse.",
    },
    {
      id: 4,
      owner: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis ullamcorper aliquam ipsum nulla in vitae nisi. Purus felis sed aliquam.",
    },
  ];
  return (
    <div className="message-comp">
      <MesageHead />
      {message.map((item, i) => (
        item.owner? <UserTwo key={i} item={item}/> : <UserOne key={i} item={item}/>
      ))}
      <MessageBottom />
    </div>
  );
};
