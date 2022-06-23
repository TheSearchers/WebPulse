import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { When } from "react-if";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { LoginContext } from "../Auth/auth";

export default function ButtonAppBar() {
  const auth=useContext(LoginContext)
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:"#212121"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Webpuls
          </Typography>
          <When condition={!auth.loggedIn}>
          <LoginIcon/>
          <Button color="inherit" onClick={auth.displayForm}>Login</Button>
          </When>
          <When condition={auth.loggedIn}>
          <LogoutIcon/>
          <Button color="inherit" onClick={auth.logout}>Logout</Button>
          </When>
        </Toolbar>
      </AppBar>
    </Box>
  );
}