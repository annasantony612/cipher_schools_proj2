import React from 'react';
import dashboard from '../assets/dashboard.png'
import user from '../assets/user.png'
import courses from '../assets/courses.png'
import wishlist from '../assets/wishlist.png'
import like1 from '../assets/like1.png'

function Rightside() {
  return (
    <div className="vertical-box2">
      <div className="Container">
            <img src={dashboard} style={{margin: '0', padding: '0'}}/>
            <div className='imgName'>
                Dashboard
            </div>
     </div>
     <div className="Container">
            <img src={user} style={{margin: '0', padding: '0'}}/>
            <div className='imgName'>
                My Profile
            </div>
     </div>
     <div className="Container">
            <img src={courses} style={{margin: '0', padding: '0'}}/>
            <div className='imgName'>
                Enrolled Courses
            </div>
     </div>
     <div className="Container">
            <img src={wishlist} style={{margin: '0', padding: '0'}}/>
            <div className='imgName'>
                Wishlist
            </div>
     </div>
     <div className="Container">
            <img src={like1} style={{margin: '0', padding: '0'}}/>
            <div className='imgName'>
              Liked Videos
            </div>
     </div>
      {/* <div className="Container">Profile</div>
      <div className="Container">Courses</div>
      <div className="Container">Wishlist</div>
      <div className="Container">Videos</div> */}
    </div>
  );
}
export default Rightside;