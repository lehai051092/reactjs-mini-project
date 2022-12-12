import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar} from "@mui/material";
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

Header.propTypes = {};

function Header(props) {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
            <CoronavirusIcon/>
            Mini Project
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}/>
          <Button color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;