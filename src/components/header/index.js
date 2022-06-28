import React from 'react';
import { useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../Auth/auth";
import logo from '../assets/getDude.gif'
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

<div
  className='p-5 text-center bg-image'
  style={{ backgroundImage: "url('https://img.freepik.com/free-photo/4k-gray-mandala-noise-background_612031-6.jpg')", height: 607 , marginBottom : '25px' }}
>
  <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
    <div className='d-flex justify-content-center align-items-center h-100'>
      
      <div className='text-white'>
        
        <a className='btn btn-outline-light btn-lg' role='button' onClick={scrollToSection}>
        Get Started
        </a>
      </div>
    </div>
  </div>
</div>

</header>
  );
}



