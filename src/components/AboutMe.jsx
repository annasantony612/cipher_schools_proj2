import React from 'react';


function AboutMe() {
  return (
    <div>
             <div className="container-Abt">
      <div className="left-flex">
        <p>About Me</p>
      </div>
      <div className="right-flex">
        <button style={{ backgroundColor: 'orange', color: 'white',borderColor:'orange',paddingInline :'15px',borderRadius:'5px'}}>Edit</button>
      </div>
      
    </div>
    <div className="container-Abt2">
   
    <h6 className='add'>Add Something about you..</h6>
  </div>

  <h1 className="thin-line"></h1>
    </div>
   
  );
}
export default AboutMe;