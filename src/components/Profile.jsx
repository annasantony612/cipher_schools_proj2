import React from 'react';
import { Link } from "react-router-dom";
import user1 from "../assets/user1.png"
import pencil from "../assets/pencil.png"
import Followers from './Followers';
import Button from './Button';
import CustomModal from './CustomModal'


function Profile() {
  return (
    <div className="horizontal-box">
      <div >
      <img className="profile-icon" src={user1}/>
      
      </div>
      <div className='edit-btn'>
      <CustomModal/>
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
       <h4> 4 Followers</h4>
       <Link to="/Followers" link={Followers}>
        <Button>View Followers</Button>
      </Link>
      </div>
    </div>
  );
}
export default Profile;