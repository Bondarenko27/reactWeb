import React from 'react'
import AboutImage from '../media/3.jpg';
import '../styles/About.css';
function About() {
    return (
        <div className='about'>
            <div className='aboutTop' style={{backgroundImage:`url(${AboutImage})`}}></div>
            <div className='aboutBottom'>
                <h1> ABOUT US</h1>
                <p>We are proud exlorers of Canadian gems. Our products are found and worked in Canada, and Canada only.Follow us on social media.</p>
            </div>
        </div>
    )
}

export default About
