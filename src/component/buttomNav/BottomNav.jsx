import "./buttomNav.css";
import React from 'react';
import { Link } from 'react-router-dom';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

const BottomNav = (props) => {
    return (
        <div className='bottom-nav'>
            <Link className='linkstyle' to="/"><img className='home24' src={ props.home} /> <br /><span className='span24'>home</span> </Link>
            <Link className='linkstyle' to="/"> <SearchRoundedIcon className='icon-one' />  <br /><span className='span24'>search</span> </Link>
            <Link className='linkstyle' to="/"> <AddCircleOutlineRoundedIcon className='icon-two' /></Link>
            <Link className='linkstyle' to="/"> <NotificationsRoundedIcon className='icon-one' />  <br /><span className='span24'>notification</span> </Link>
            <Link className='linkstyle' to="/"> <PersonRoundedIcon className='icon-one' />  <br /><span className='span24'>user</span> </Link>
        </div>
    )
}

export default BottomNav
