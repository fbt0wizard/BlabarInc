import React from 'react';
import "./messageHead.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import chathead from "../../images/chathead.png";

export const MesageHead = () => {
  return (
      <div className="message-wrapper">
             <div className='message-head'>
        <div className="return">
            <ArrowBackIcon className='icon-back' />
        </div>
        <div className="candidate">
            <div className="pics-header">
                <img src={chathead} alt="" />
            </div>
            <div className="user-info">
                <h3>Cruzman</h3>
                <p>@cruzzy</p>
            </div>
        </div>
        <div className="more-info">
            <InfoOutlinedIcon className='icon-info'/>
        </div>
    </div>
      </div>
  )
}
