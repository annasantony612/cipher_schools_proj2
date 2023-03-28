import React from 'react';

const Grid = () => {
  const divisions = Array.from({ length: 52 }, (_, i) => i + 1);

  return (
    <div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" ,marginLeft:'90px',width:'40px'}}>
      <div style={{ height: "10px", width: "50px" ,marginTop:'30px',paddingBottom:'20px',fontSize:'12px',fontWeight:'600',color:'#ccc'}}>Mon</div>
      <div style={{  height: "10px", width: "50px",paddingBottom:'20px',fontSize:'12px',fontWeight:'600',color:'#ccc' }}>Wed</div>
      <div style={{  height: "10px", width: "50px" ,fontSize:'12px',fontWeight:'600',color:'#ccc'}}>Fri</div>
    </div>
              <div style={{ display: 'flex',marginTop:'-80px',marginLeft:'150px'}}>
       
       {divisions.map((division) => (
         
         <div key={division} style={{ width: '1rem', height: '1rem', border: '1px solid rgb(238, 238, 238)',backgroundColor:'white'}}></div>
       ))}
     </div>
     <div style={{ display: 'flex',marginTop:'0px',marginLeft:'150px'}}>
        
     {divisions.map((division) => (
       
       <div key={division} style={{ width: '1rem', height: '1rem', border: '1px solid rgb(238, 238, 238)',backgroundColor:'white'}}></div>
     ))}
   </div>
   <div style={{ display: 'flex',marginTop:'0px',marginLeft:'150px'}}>
        
     {divisions.map((division) => (
       
       <div key={division} style={{ width: '1rem', height: '1rem', border: '1px solid rgb(238, 238, 238)',backgroundColor:'white'}}></div>
     ))}
   </div>
   <div style={{ display: 'flex',marginTop:'0px',marginLeft:'150px'}}>
        
     {divisions.map((division) => (
       
       <div key={division} style={{ width: '1rem', height: '1rem', border: '1px solid rgb(238, 238, 238)',backgroundColor:'white'}}></div>
     ))}
   </div>
   <div style={{ display: 'flex',marginTop:'0px',marginLeft:'150px'}}>
        
     {divisions.map((division) => (
       
       <div key={division} style={{ width: '1rem', height: '1rem', border: '1px solid rgb(238, 238, 238)',backgroundColor:'white'}}></div>
     ))}
   </div>
   <div style={{ display: 'flex',marginTop:'0px',marginLeft:'150px'}}>
        
     {divisions.map((division) => (
       
       <div key={division} style={{ width: '1rem', height: '1rem', border: '1px solid rgb(238, 238, 238)',backgroundColor:'white'}}></div>
     ))}
   </div>
   <div style={{ display: 'flex',marginTop:'0px',marginLeft:'150px'}}>
        
     {divisions.map((division) => (
       
       <div key={division} style={{ width: '1rem', height: '1rem', border: '1px solid rgb(238, 238, 238)',backgroundColor:'white'}}></div>
     ))}
   </div>
    </div>
  
  );
};

export default Grid;

