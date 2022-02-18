import React from 'react';
import "./channelSearchResult.css";

export const ChannelSearchResult = ({img, text}) => {
  return (
    <div className='channel-search-result-list'>
        <img src={img} alt="" />
        <p>{text}</p>
    </div>
  )
}
