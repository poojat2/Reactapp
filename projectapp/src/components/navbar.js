import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import g1 from '../Assets/g1.png';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={g1}/>
      <h1 className='h1'> 
         K MART
      </h1>
      <div className='rightside'>
         <Link>Home</Link>
         <Link>Menu</Link>
         <Link>About</Link>
         <Link>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
