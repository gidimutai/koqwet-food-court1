import React from 'react'
import {Box, Typography } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <>
    <Box
     sx={{
      textAlign: 'center',
      bgcolor:'#263238',
      color:'white',
      p:3,
        }}>
      <Box 
      sx={{
        my:3, 
        "& svg":{
        fontSize:'2.5rem',
        cursor:'pointer',
        mr:3
      },
        '& svg:hover':{
          color: 'goldenrod',
          transform: 'translateX(5px)',
          transition:'all 400ms'
      }
      }}>
        {/*icons*/}
        <EmailIcon/>
        <InstagramIcon/>
        <GitHubIcon/>
        <YouTubeIcon/>
        <TwitterIcon/>
      </Box>
      <Typography
       variant='h5'
       sx={{
        '@media (max-width:600px)': {
          fontSize: '2rem',
          fontWeight: ''
        }
       }}  
      >
        All Rights Reserved &copy; Gmutai
      </Typography>
    </Box>
    </>
  )
}

export default Footer