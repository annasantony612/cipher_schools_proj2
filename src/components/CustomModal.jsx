import * as React from 'react';
import Box from '@mui/material/Box';
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
  height:400,
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
          
          <Typography
id="modal-modal-title" variant="h6" component="h2">
 Profile Update
 
</Typography>
<div className='cust'>
              <div className='cust-prfl'>
              <img src={user1} />
              </div>
              <div className='cust-content'>
              
                            <div className='cust-head'>
                                First Name
                            </div>
                            <div className='cust-area'>
                                <ul>
                              
                                    {/* <li>Linkdin</li> */}
                                </ul>
                              </div>
                </div>
                <div className='cust-content'>
              
                            <div className='cust-head'>
                                Last Name
                            </div>
                            <div className='cust-area'>
                               
                              </div>
                </div>
                <div className='cust-content'>
              
              <div className='cust-head'>
                Email
              </div>
              <div className='cust-area'>
                  <ul>
                
                    
                  </ul>
                </div>
  </div>
  <div className='cust-content'>
              
              <div className='cust-head'>
               Phone number
              </div>
              <div className='cust-area'>
                 
                </div>
                <div className='cust-btn'>
                <Button> Save</Button> 
                </div>
                
  </div>
 
          </div>
      
        </Box>
      </Modal>
    </div>
  );
}

