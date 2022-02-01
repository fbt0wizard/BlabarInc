import React from 'react';
import "./downloadApp.css";
const DownloadApp = ({ pop, setPop }) => {

    
    return (
        <div className='pop-up' style={pop}>
            <h1 className='headLine'>Blarbar is better with <br></br> the app!</h1>
            <button className='btn'>Get the app now :)</button>
        </div>
    )
}
export default DownloadApp;
