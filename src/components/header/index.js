import React from 'react';
import { useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../Auth/auth";
import logo from '../../assets/logo.png'
import { scroller } from "react-scroll";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import "./Header.css";


export default function ButtonAppBar() {
  const auth=useContext(LoginContext)

  const scrollToSection = () => {
    scroller.scrollTo("span2", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
<header>
<MDBNavbar expand='lg' light sticky style={{backgroundColor : '#BDBDBD'}}>
  <MDBContainer fluid>
    <MDBNavbarToggler
      aria-controls='navbarExample01'
      aria-expanded='false'
      aria-label='Toggle navigation'
    >
      <MDBIcon fas icon='bars' />
    </MDBNavbarToggler>
    <div className='collapse navbar-collapse' id='navbarExample01'>
      <MDBNavbarNav right className='mb-2 mb-lg-0'>
        <MDBNavbarItem active>
        
          <MDBNavbarLink aria-current='page' href='#'>
          <MDBIcon fas icon="home" />
            Home
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBNavbarLink href='#'> 
          <MDBIcon far icon="question-circle" />
          About</MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
        <When condition={!auth.loggedIn}>
          <MDBNavbarLink  onClick={auth.displayForm} > 
          <MDBIcon fas icon="sign-in-alt"/>
          Login
          </MDBNavbarLink>
        </When>
        <When condition={auth.loggedIn}>
          <MDBNavbarLink onClick={auth.logout}>
              <MDBIcon fas icon="sign-out-alt" />
          Logout
          </MDBNavbarLink>
      
        </When>
        </MDBNavbarItem>
  
      </MDBNavbarNav>
    </div>
  </MDBContainer>
  <img  src = {logo} style = {{height : '50px' , marginRight : '37px'}}/>
</MDBNavbar>

<div className="app__header app__wrapper section__padding" id="home" style={{}}>
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">New way to check your WebSite</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        You have new project, or new WebSitem and want to check the requests and
        responses of it. Or you are not sure if that URL is really exist for
        that site, and you have to make sure it is working probably. with new
        experience, our web application provides that and more{" "}
      </p>
      <button type="button" className="custom__button">
        Check your webSite
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={logo} alt="header_img" />
    </div>
  </div>

</header>
  );
}



