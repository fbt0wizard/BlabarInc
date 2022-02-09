import React from 'react';
import "./searchResult.css";

export const SearchResult = ({item}) => {
  return <div className='result-comp'>
      <div className="result-img">
          <img src={item.pic} alt="" />
      </div>
      <div className="result-data">
          <div className="upper">
              <p>{item.display_name} <span>{item.username}</span></p>
          </div>
          <div className="lower">{item.comment}</div>
      </div>
      <div className="number-counts">{item.count}</div>
  </div>;
};
