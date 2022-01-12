import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../media/7.jpg';
import '../styles/Home.css';

function Home() {
    return (
        <div className='home'style ={{backgroundImage:`url(${BannerImage})`}}>
            <div className='headerContainer' >
                <h1> Minerals of Canada</h1>
                <p> FIND YOUR FAVORITE GEM!</p>
                <Link to ="/menu">
                <button> EXPLORE NOW </button>
                </Link>
                
            </div>
        </div>
    )
}

export default Home
