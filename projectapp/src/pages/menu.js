import React from 'react';
import '../styles/menu.css';
import MenuImage from '../Assets/menu.png';

function Menu() {
  return (
    <div className='menu'style ={{backgroundImage:`url(${MenuImage})`}} >
      <ol>
        <h2 style={{color : 'white', fontFamily: 'cursive', fontSize : '80px'}}>Today sales</h2>
        <li>Name : Apple    Cost : 20 </li>
        <li>Name : Rice    Cost : 120</li>
        <li>Name : Water    Cost : 50 </li>
        <li>Name : Vegetable    Cost : 45 </li>
        <li>Name : Soaps    Cost : 10 </li>
      </ol>
    </div>
  )
}

export default Menu;
