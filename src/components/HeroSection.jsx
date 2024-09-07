
import React from 'react'
import { Typography , Grid2 } from '@mui/material';
import Codes from '../components/images/BinaryCodes.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function HeroSection() {
  return (
   
    <Grid2 container direction = "row" alignItems= "center"> 
    <Grid2    item xs = {12} sm = {6}>
      <Typography variant= "h3" color= "inherit">A play with Binary</Typography>
      <Typography variant = "h5">We deliver the knowledge of Binary System</Typography>
    </Grid2>
    <Grid2 item xs = {12} sm = {6}>
      <Typography variant= "h7" color= "inherit">A play with a Binary</Typography>
      <Button variant = "contained" size="large">Click Me</Button>
    </Grid2>
    
   <Grid2 container item xs = {12} sm = {6} justifyContent= {'center'}>
    <Box component= "img" src={Codes}></Box>
    </Grid2>

   </Grid2>
    
  )
}

export default HeroSection
