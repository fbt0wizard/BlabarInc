import React from "react";
import "./finishPost.css";
import { Back } from "../../component/back/Back";
import SearchIcon from '@mui/icons-material/Search';
import { ChannelSearchResult } from "../../component/channel-search-result/ChannelSearchResult";
import result1 from "../../images/result1.png";
import result2 from "../../images/result2.png";
import result3 from "../../images/result3.png";
import result4 from "../../images/result4.png";

export const FinishPost = () => {
  return (
    <div>
      <Back />
      <h2 className="head-tittle topic">What topic is your poll related to?</h2>
      <div className="search-channel">
          <label htmlFor="">
              <input type="text" placeholder="e.g Stranger things"/> <SearchIcon className="the-search-icon"/>
          </label>
          <div className="channel-search-result">
              <ChannelSearchResult img={result1} text={'Stranger things'}/>
              <ChannelSearchResult img={result2} text={'Stranger things wrld'}/>
              <ChannelSearchResult img={result3} text={'Stranger things worl.'}/>
              <ChannelSearchResult img={result4} text={'Strangerthings'}/>
          </div>
      </div>
    </div>
  );
};
