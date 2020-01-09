import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from '../side-drawer/side-drawer.component';

import './header.styles.css';

const Header = () => {
  const [drawerShow, setDrawerShow] = useState(false)
  return (
  <AppBar 
      position="fixed"
      style={{
        backgroundColor:'#2f2f2f',
        boxShadow:'none',
        padding:'10px 0px'
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue" >The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>
        <IconButton
          aria-label="menu"
          color="inherit"
          onClick={() => setDrawerShow(true)}
        >
          <MenuIcon></MenuIcon>
        </IconButton>
        <SideDrawer 
          open={drawerShow}
          onClose={(value) => setDrawerShow(value)}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header;