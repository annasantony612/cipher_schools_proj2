import React from 'react';
import menu from "../assets/menu.png";
import cipherLogo from "../assets/cipherLogo.jpeg"

const Nav = () => {
  return (
    <div className='navbar'>
        
        <img className='menu' src={menu}/>
        <img className='cipherLogo' src={cipherLogo}/>
          <nav>
            <ul>
              <li>Features</li>
              <li>About us</li>
              <li>Pricing</li>
            </ul>
          </nav>
        </div>
  )
}

export default Nav