import React from 'react';
import SortIcon from '@mui/icons-material/Sort';
import { Link } from 'react-router-dom';

const Nav = ({ logo, ghost, timer, handleSwap, swap }) => {
    return (
        <div className='top-nav'>
            <div className="top-side">
              <img src={ logo } alt="Blabar logo" />
              <button className='hamburgerStyle'> <SortIcon className='icon26'/> </button>
            </div>
            <div className="nav-two">
                <div onClick={ handleSwap } className={swap == false ? 'linkStyle26' : 'defaultStyle'}><img className='img26c' src={ghost} /> <span className='span26f'>People you follow</span></div>
                <div onClick={ handleSwap } className={swap == true ? 'linkStyle26' : 'defaultStyle'}><img className='img26e' src={timer} /><span className='span26f'>Recent posts</span></div>
            </div>
        </div>
    )
}

export default Nav
