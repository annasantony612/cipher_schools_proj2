import React from 'react';
import home from '../assets/home.png';
import courses from '../assets/courses.png';
import explore1 from '../assets/explore.png';
import check from '../assets/check.png';
import dashboard from '../assets/dashboard.png';
import discord from '../assets/discord.png';
import feedback from '../assets/feedback.png';
import logout from '../assets/logout.png';

function Sidebar() {
  return (
    <div className='vertical-box'>

   
    <div className="vertical-box-Top">
      <div className="icon-container">
        <img src={home} style={{margin: '0', padding: '0'}}/>
        <div className='imageName'>Home</div>
      </div>
      

      <div className="icon-container">
      <img src={courses} style={{margin: '0', padding: '0'}}/>
      <div className='imageName'>Courses</div>
      </div>
      <div className="icon-container">
      <img src={explore1} style={{margin: '0', padding: '0'}}/>
      <div className='imageName'>Trending</div>
      </div>
      <div className="icon-container">
      <img src={check} style={{margin: '0', padding: '0'}}/>
      <div className='imageName'>Following</div>
      </div>
      <div className="icon-container">
      <img src={dashboard} style={{margin: '0', padding: '0'}}/>
      <div className='imageName'>Dashboard</div>
      </div>
      <div className="icon-container">
      <img src={discord} style={{margin: '0', padding: '0'}}/>
      <div className='imageName'>Discord</div>
      </div>
      <div className="icon-container">
      <img src={feedback} style={{margin: '0', padding: '0'}}/>
      <div className='imageName'>Feedback</div>
      </div>


    </div>


    <div className='logout'>
    <div className="icon-container">
      <img src={logout} style={{margin: '0', padding: '0'}}/>
      <div className='imageName'>Logout</div>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;