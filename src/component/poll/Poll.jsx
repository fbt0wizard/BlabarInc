import React from 'react';
import "./poll.css";

export const Poll = ({poll,vid}) => {
  return (
    <div className='poll'>
        <div className={vid === 'red' ? "click-me video" : "click-me"}>
            <button>Click me</button>
        </div>
        <div className="center-img">
            <img src={poll} alt="" />
            <h2>Text poll</h2>
        </div>
    </div>
  )
}
