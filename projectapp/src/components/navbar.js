import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='h1'> 
         KMART
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
