import React from 'react'
import { AppBar,  Toolbar, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


function NavBar() {
  return (
    
      <AppBar position="fixed">
        <Toolbar>
        <Typography varient = "h5" flexGrow={1} >BinaryBites</Typography>
        <Button varient= "text" color= "inherit"  startIcon= {<LoginIcon/>}>Login</Button>
        <Button varient= "text" color= "inherit"  endIcon={<LogoutIcon/>}>Logout</Button>
       
        </Toolbar>
      </AppBar>
  );
};

export default NavBar
