import React from 'react';
import HomeImage from '../Assets/home.jpg';
import '../styles/home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${HomeImage})`}}>
        <div className='headerContainer'>
            <h1>K-MART</h1>
            <p>For all kind of Grocery Shopping!</p>
        </div>
    </div>
  )
}

export default Home;
