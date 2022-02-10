import React from 'react';
import "./userTwo.css";

export const UserTwo = ({item}) => {
  return (
    <div className='user-two'>
        <img src={item.image} alt="" />
        <div className="chat-content">
            <p>{item.content}</p>
        </div>
    </div>
  )
}
