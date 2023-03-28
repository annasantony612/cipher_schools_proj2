import React from 'react'
import Nav from './Nav'
import Sidebar from './SideBar'
import Button from './Button'
import user1 from '../assets/user1.png'
import UserBox from './UserBox'
const Followers = () => {
  return (
    <div className='flw'>
        <Nav/>
        <Sidebar/>
<div className='flwBox'>
<p>Users Following You</p>
</div>
<div className='follower-boxM'>
    {/* <UserBox/> */}
    <div className='flwdir'>
    <div className='userbox'>
                <div className='flwProf'>
                <img src={user1}/>
        </div>
        <div className='flwname'>
            Abijith Fernandez
          
        </div>
        <div className='flwbtn'>
            <Button> follow</Button>
        </div>
</div>
<div className='userbox'>
                <div className='flwProf'>
                <img src={user1}/>
        </div>
        <div className='flwname'>
            Asha Neelima
          
        </div>
        <div className='flwbtn'>
            <Button> follow</Button>
        </div>
</div>
<div className='userbox'>
                <div className='flwProf'>
                <img src={user1}/>
        </div>
        <div className='flwname'>
           Rythm Malhothra
       
        </div>
        <div className='flwbtn'>
            <Button> follow</Button>
        </div>
</div>
<div className='userbox'>
                <div className='flwProf'>
                <img src={user1}/>
        </div>
        <div className='flwname'>
            Olivia Jose
          
       
        </div>
        <div className='flwbtn'>
            <Button> follow</Button>
        </div>
</div>
    </div>
    
</div>

    </div>
  )
}

export default Followers