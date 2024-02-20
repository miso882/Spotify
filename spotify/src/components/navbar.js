import React from "react";
import { BiHomeAlt } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi';
import { GiEvilLove } from 'react-icons/gi';
import { MdQueueMusic } from 'react-icons/md';
import { SiSpotify } from 'react-icons/si'
import { GoThreeBars } from 'react-icons/go';
import { MdAlbum } from 'react-icons/md';
import { GiMicrophone } from 'react-icons/gi';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Routes } from "react-router-dom"; 

const Navicationbar = ()=> 
    // <Routes>
        <header>
            <nav>
                <div className="nav_logo">
                    <div className="icon_spotify"><SiSpotify /></div>
                    <h4 className="spotify_title">Spotify</h4>
                    <div className="nav_toggle">
                        <GoThreeBars />
                    </div>    
                </div>
                <div className="navication">
				<Link to='/'><div className="nav_icon"><BiHomeAlt /></div>Home</Link>
				<Link to='/search'><div className="nav_icon"><FiSearch /></div>Search</Link>
				<Link to='/albums'><div className="nav_icon"><MdAlbum /></div>Albums</Link>
				<Link to='/artists'><div className="nav_icon"><GiMicrophone /></div>Artists</Link>
				<Link to='/genres'><div className="nav_icon"><MdQueueMusic /></div>Genres</Link>


                </div>
            </nav>
        </header>
//     </Routes>
export default Navicationbar; 
