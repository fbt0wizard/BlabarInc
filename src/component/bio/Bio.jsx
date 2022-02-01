import "./bio.css";
import React, { useEffect } from 'react';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import FastForwardRoundedIcon from '@mui/icons-material/FastForwardRounded';
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const Bio = ({ bio, authUser }) => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Update your bio";
    },[]);

    const gotoDashboard = () => {
        authUser()
        navigate("/dashboard");
    }
    const props = useSpring({
        to: {
            opacity: 1,
        },
        from: {
            opacity: 0,
        },
        delay: 500,
    });
    return (
        <animated.div style={props}>
            <div className="bio">
                <div className="skip">
                    <button onClick={gotoDashboard}>Skip <FastForwardRoundedIcon className='icon27' /></button>
                </div>
                <h1 className="instruct dir">Upload your profile photo and bio</h1>
                <div className="upload">
                    <label htmlFor="profile">
                        <img src={bio} alt="" />
                        <input type="file" name="profile" id="profile" accept="image/*" />
                        <ModeEditRoundedIcon className='uploadStyle' />
                    </label>
                </div>
                <div className="bio-data">
                    <label htmlFor="biodata">Bio
                        <textarea name="bio" cols="30" rows="1" placeholder="Enter your bio"></textarea>
                    </label>
                </div>
                <div className="btn-submit">
                    <button onClick={gotoDashboard} className="primary-button">Finish</button>
                </div>

            </div>
        </animated.div>
    )
}


export default Bio;
