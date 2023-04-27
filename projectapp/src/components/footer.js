import React from 'react';
import {FaWhatsappSquare, FaFacebook, FaInstagram} from 'react-icons/fa';
import  '../styles/footer.css'

function Footer() {
  return (
    <div>
        <div className='footer'>
        <div className='socialMedia' >
            <FaFacebook/><FaInstagram/><FaWhatsappSquare/>
        </div>
        <p className='p'>&copy; 2023 KMart.com</p>
        </div>
    </div>
  )
}

export default Footer;
