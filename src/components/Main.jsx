import React from 'react';
import Nav from './Nav';
import Sidebar from './SideBar';
import Profile from './Profile';
import Rightside from './Rightside';
import AboutMe from './AboutMe';
import CipherMap from './CipherMap';


const Main = () => {
  return (
    <div className='main'>
        <Nav/>
        <Sidebar/>
        <Profile/>
        <Rightside/>
        <AboutMe/>
        <CipherMap/>

    </div>
  )
}

export default Main