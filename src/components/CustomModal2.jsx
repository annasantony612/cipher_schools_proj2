import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import user1 from '../assets/user1.png'
import Button from './Button';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:300,
  padding:'20px',
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
          
          
<div className='cust2'>
              <div className='Modal3'>
              
                            <div className='cust-area2'>
                                App Devolopment
                              </div>

                            <div className='cust-area2'>
                                Game Devolopement
                                </div>

                            <div className='cust-area2'>
                                Programming
                                </div>
                               
              </div>
              <div className='cust-content'>
              
                            <div className='cust-area2'>
                               Web Devolopment 
                              </div>
                              <div className='cust-area2'>
                               Data Structures
                              </div>
                              <div className='cust-area2'>
                               Machine Learning
                              </div>
                </div>
                
                <div className='cust-btn2'>
                <Button> Save</Button> 
                </div>

 
          </div>
      
        </Box>
      </Modal>
    </div>
  );
}

