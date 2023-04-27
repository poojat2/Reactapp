import React from 'react';
import AboutImage from '../Assets/about.jpg';
import '../styles/about.css';

function About() {
  return (
    <div className='about'> 
      <div className='aboutTop' style={{ backgroundImage: `url(${AboutImage})` }}>
      </div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>At Kmart you can find holiday decorations, appliances, automotive, baby, beauty & health, bed & bath, books & magazine, clothing, electronics & office, fitness & sport, food & grocery, for homes, gifts, home improvement, jewelry & watches, lawn & garden, music, movies and gaming, office products, outdoor living & patio, pharmacy, pets, shoes, toys & games, and clearance items.
        </p>
      </div>
    </div>
  )
}

export default About;
