import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>
                <p>&copy;2022 KristinaBondarenko.com</p>

            </div>
            
        </div>
    )
}

export default Footer
