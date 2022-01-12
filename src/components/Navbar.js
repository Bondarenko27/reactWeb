import React, {useState} from 'react'
import Logo from '../media/1.jpg';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";


function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)

    const toggleNavbar = () =>{
        setOpenLinks(!openLinks);
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks? "open":"close"}>
                <img src={Logo}/>
                <div className='hiddenLinks'>
            </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">Explore</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <button onClick={toggleNavbar}>
               
                </button>
                
            </div>
            
        </div>
    )
}

export default Navbar
