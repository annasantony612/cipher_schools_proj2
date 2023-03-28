import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import user1 from '../assets/user1.png'
import Button from './Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:330,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  color:'black',
    boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
<div className='cust'>
              <div className='cust-prfl3'>
            
              
              <div className='cust-content3'>
              
                            <div className='cust-head'>
                                Current Password
                            </div>
                            <div className='cust-area3'>
                                <ul>
                              
                                  
                                </ul>
                              </div>
                </div>
                <div className='cust-content2'>
              
                            <div className='cust-head'>
                                New Password
                            </div>
                            <div className='cust-area3'>
                                <ul>
                              
                                  
                                </ul>
                              </div>
                </div>
                <div className='cust-content2'>
              
              <div className='cust-head'>
                  Confirm Password
              </div>
              <div className='cust-area3'>
                  <ul>
                
                  </ul>
                </div>
             </div>
  </div>
 
          </div>
         
          <div className='cust-btn3'>
                <Button> Save</Button> 
                </div>
        </Box>
      </Modal>
    </div>
  );
}

