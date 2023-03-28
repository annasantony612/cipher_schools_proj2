import React, { useState } from 'react';
import menu from "../assets/menu.png";
import cipherLogo from "../assets/cipherLogo.jpeg";
import explore from "../assets/explore.png"
import arrow from "../assets/arrow.png"
import search from "../assets/search.png"
import bell from "../assets/bell.png"
import user from "../assets/user.png"
  
const Nav = () => {
   
  return (
    <div className='navbar'>
        <nav>
            <div className='navLeft'>
                    <ul className="nav-list">
                        <li><img src={menu}/>
                        <img className='cipherLogo' src={cipherLogo}/></li>
                        <li><h1>Cipher Schools</h1> </li>
                        <li><img  src={explore}/></li>
                        <li><h5>Browse</h5> </li>
                        <li><img  src={arrow}/></li>
                    </ul>
        
            </div>
        
          <div className='navRight'>
          <ul>
          <li className='searchbox'><img src={search}/> Search and Learn</li>  
              <li><img src={bell}/></li>
              <li><img src={user}/></li>

            </ul>
          </div>
          
          </nav>
     </div>
  )
}

export default Nav