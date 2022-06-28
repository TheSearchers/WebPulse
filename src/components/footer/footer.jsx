import React from 'react';
import {
  MDBFooter,
  MDBContainer,
 

  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter 
    className='bg-dark text-center text-white'>
      <span>
      <MDBContainer  style={{
      height:"50px"
    }}className='p-4 pb-0'
      >
        
        <section   style={{
      width:"300px",
      marginRight:"25px"
    }} className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='dr.mohammed.j.awadallah@gmail.com' role='button'>
            <MDBIcon fab icon='google' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/hxh_jazz/' role='button'>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/TheSearchers' role='button'>
            <MDBIcon fab icon='github' />
          </a>
         
        </section>
       
        
      </MDBContainer>
      </span>
      <span>
        © 2022 Copyright:
        <a className='text-white' href='https://www.instagram.com/asac.ltuc/?hl=en'>
          ASAC : The Searchers
        </a>
        </span>
     
    </MDBFooter>
  );
}