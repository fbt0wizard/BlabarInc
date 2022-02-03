import React from 'react';
import "./channel.css";
import av1 from '../../images/av1.png';
import av2 from '../../images/av2.png';
import av3 from '../../images/av3.png';
import av4 from '../../images/av4.png';
import SearchIcon from '@mui/icons-material/Search';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import CompareArrowsRoundedIcon from '@mui/icons-material/CompareArrowsRounded';

export const Channel = () => {
  return <div className='channel'>
      <div className="search">
        <label htmlFor="search-input">
        <input type="search" name="search" placeholder='search for something' />
        <SearchIcon className='search-icon'/>
        </label>
      </div>
      <div className="chanel-item">
        <div className="header">
          <h3>Trending</h3>
          <p>channels</p>
        </div>
        <div className="channel-avatar">
          <figure className='item1'>
            <img src={av1} alt="" />
            <figcaption>
            </figcaption>
          </figure>
          <figure className='item2'>
            <img src={av2} alt="" />
            <figcaption>
            </figcaption>
          </figure>
          <figure className='item3'>
            <img src={av3} alt="" />
            <figcaption>
            </figcaption>
          </figure>
          <figure className='item4'>
            <img src={av4} alt="" />
            <figcaption>
            </figcaption>
          </figure>
        </div>
        <div className="show-more">
          <p>See more</p>
        </div>
      </div>
      <div className="header">
          <h3>Trending</h3>
          <p>topics</p>
        </div>
      <div className="trending-list">
        <h3>La casa de papel</h3>
        <div><CompareArrowsRoundedIcon className='red'/> </div>
        <div className='count'><CommentRoundedIcon className='icon30'/> 887k</div>
      </div>
      <div className="trending-list">
        <h3>Money Heist</h3>
        <div><CompareArrowsRoundedIcon className='green'/> </div>
        <div className='count'><CommentRoundedIcon className='icon30'/> 887k</div>
      </div>
      <div className="trending-list">
        <h3>After Hours</h3>
        <div><CompareArrowsRoundedIcon className='green'/> </div>
        <div className='count'><CommentRoundedIcon className='icon30'/> 887k</div>
      </div>
  </div>;
};
