import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../Auth/auth";
import logo from '../assets/getDude.gif'


export default function ButtonAppBar(props) {
  const auth = useContext(LoginContext);

  return (
    <>

    {console.log("inside == > ",auth.currUser)}
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="header-bar" sx={{ backgroundColor: "#212121" }}>
          <img src = {logo}></img>
          <nav className="flex gap-3 menue">
            <a href = '/' > Home </a>
            <a href = '/getdude' > getDude </a>
          
          <When condition={!auth.loggedIn}>
            
            <Button color="inherit" onClick={()=>{
              auth.onOpenModal();
              props.handleChatImg()
            }}>
              Login
            </Button>
          </When>
          <When condition={auth.loggedIn}>
          { auth.currUser != "unnamed" ?
              props.submit(auth.currUser) : props.submit("")
            }
            <Button color="inherit" onClick={()=>
          {
            auth.logout() ;
          props.handleChatImg()
          }
          }>
              Logout
            </Button>
          </When>
            </nav>
         
            
          
        </Toolbar>
      </AppBar>
    </Box>

    </>
  );
}
