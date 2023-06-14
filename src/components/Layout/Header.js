import React, { useState } from 'react'
import { 
  AppBar,
  Box, 
  IconButton,
  Toolbar,
  Typography, 
  Drawer,
  Divider
 } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css'



const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
    //handle menu click
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
    }
    //menu drawer
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography
        color={'#4B3621'}
        fontFamily={"URW Chancery L, cursive"}
        fontWeight={'bolder'}
        variant='h5'
        component={'div'}
        sx={{flexGrow:1}}
        >
          KoQwet Food Court
      </Typography> 
      <Divider/> 
      <ul className="mobile-navigation">
        <li>
          <Link activeClassName="active" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      </Box>
    )
  return (
    <>
    <Box>
      <AppBar component={"nav"} sx={{bgcolor:'#99EDC3'}}>
        <Toolbar>
          <IconButton
          aria-label='open drawer'
          edge='start'
          sx={{
            color: '#ff5722',
            mr: 2,
            display:{sm:'none'}
          }}
          onClick={handleDrawerToggle}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
          color={'#4B3621'}
          fontFamily={"URW Chancery L, cursive"}
          fontWeight={'bolder'}
          variant='h5'
          component={'div'}
          sx={{flexGrow:1}}
          >
            KoQwet Food Court
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
             <ul className='navigation-menu'>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul> 
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={'nav'}>
        <Drawer 
        variant='temporary' 
        open={mobileOpen}
         onClose={handleDrawerToggle}
         sx={{display: {xs:'block', sm:'none'},"& .MuiDrawer-pape":{
          boxSizing:'border-box',
          width: "240px"
         }}}
         >
            {drawer}
        </Drawer>
      </Box>
    </Box>
    </>
  )
}

export default Header