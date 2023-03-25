import React, { useState } from 'react';
import menu from "../assets/menu.png";
import cipherLogo from "../assets/cipherLogo.jpeg";
import explore from "../assets/explore.png"
import arrow from "../assets/arrow.png"
import search from "../assets/search.png"
import bell from "../assets/bell.png"
import user from "../assets/user.png"



// const lightStyles = {
//     backgroundColor: '#fff',
//     color: '#000',
//   };
  
//   const darkStyles = {
//     backgroundColor: '#333',
//     color: '#fff',
//   };
  
const Nav = () => {
    // const [mode, setMode] = useState('light'); // default to light mode

    // // Toggle the mode state variable
    // const toggleMode = () => {
    //   setMode(mode === 'light' ? 'dark' : 'light');
    // };
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
              {/* <li>Pricing</li>
              <div style={mode === 'light' ? lightStyles : darkStyles}>
    
      <button onClick={toggleMode}>Toggle Mode</button>
    </div> */}
            </ul>
          </div>
          
          </nav>
     </div>
  )
}

export default Nav