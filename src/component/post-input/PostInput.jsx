import React from "react";
import "./postInput.css";

export const PostInput = ({tittle, ph, count}) => {
  return (
    <fieldset className="post-fieldset">
      <legend>{tittle}</legend>
      <div className="input-count">
        <input type="text" placeholder={ph}/>
        <span>{count}</span>
      </div>
    </fieldset>
  );
};
