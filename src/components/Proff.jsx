import React from 'react'

const Proff = () => {
  return (
    <div>
        <h1 className="thin-line"></h1>
        <div className="container-Abt">
            <div className="left-flex">
              <p>Professional Information</p>
            </div>
            <div className="right-flexProff">
              <button style={{ backgroundColor: '#f3912e', color: 'white',borderColor:'#f3912e',paddingInline :'15px',borderRadius:'5px'}}>Edit</button>
            </div>
            
            
          </div>
          <div className='web'>
          <div className="web-left">
                            <div className='social'>
                                Highest Education
                            </div>
                            <div className='grad'>
                               Graduation
                            

                            </div>
                </div>
          </div>
          <div className="web-right">
                            <div className='social1'>
                                What do you do currently?
                            </div>
                            <div className='grad1'>
                              College Student
                            </div>
                </div>
    </div>

        
  )
}

export default Proff