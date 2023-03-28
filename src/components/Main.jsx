import React from 'react';
import  { useState } from 'react';
import Nav from './Nav';
import Sidebar from './SideBar';
import Profile from './Profile';
import Rightside from './Rightside';
import AboutMe from './AboutMe';
import CipherMap from './CipherMap';
import Months from './Months';
import Grid from './Grid';
import Web from './Web';
import Proff from './Proff';
import Password from './Password';
import Interest from './Interest';

const Main = () => {
  const [name, setName] = useState('');
  return (
    <div className='main'>
        <Nav/>
        <Sidebar/>
        <Profile />
        <Rightside/>
        <AboutMe/>
        <CipherMap/>
        <Months/>
        <Grid/>
        <Web/>
        <Proff/>
        <Password/>
        <Interest/>

    </div>
  )
}

export default Main