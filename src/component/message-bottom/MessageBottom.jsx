import React from "react";
import "./messageBottom.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const MessageBottom = () => {
  return (
    <div className="message-bottom-wrapper">
      <div className="message-bottom">
        <div className="attach">
          <AddCircleIcon className="add-icon"/>
        </div>
        <div className="textarea-input">
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Type a message"
          ></textarea>
        </div>
        <div className="send-message">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
