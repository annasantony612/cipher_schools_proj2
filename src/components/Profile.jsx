import React from 'react';
import user1 from "../assets/user1.png"

function Profile() {
  return (
    <div className="horizontal-box">
      <div >
      <img className="profile-icon" src={user1}/>
      </div>
      <div className="name-email">
                <div className="name">
                    <h3>Hello</h3>
                <h4>Anxxx X Xxxx</h4>
                </div>
                <div className="email">
                anxxxxxxxxx@gmail.com
                </div>
      </div>
      <div className="followers">
       <h4> 10 Followers</h4>
      </div>
    </div>
  );
}
export default Profile;