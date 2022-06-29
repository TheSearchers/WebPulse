import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import {TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialTwitter} from 'react-icons/ti';
const About = () => {
  return (
    <div name="" className="w-full my-32 about">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Our Team</h2>
          <p className="text-3xl py-6 text-gray-500">
            Team of trusted students, decided to make new idea in web app.{" "}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 px-2 text-center">
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://cdn.discordapp.com/attachments/961226787273191455/991714014340075520/IMG_20210720_112919.jpg' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Mohammed Awadallah</MDBCardTitle>
              <MDBCardText>
                Software developer
              </MDBCardText>
              <nav>
                <a href=''><TiSocialFacebook /></a>
                <a href=''><TiSocialGithub /></a>
                <a href=''><TiSocialLinkedin /></a>
                <a href=''><TiSocialTwitter /></a>
              </nav>
                          </MDBCardBody>
          </MDBCard>


          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://cdn.discordapp.com/attachments/961226787273191455/991713548931702895/formal_pic.jpg' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Osama Aballah</MDBCardTitle>
              <MDBCardText>
                Software developer
              </MDBCardText>
              <nav>
                <a href=''><TiSocialFacebook /></a>
                <a href=''><TiSocialGithub /></a>
                <a href=''><TiSocialLinkedin /></a>
                <a href=''><TiSocialTwitter /></a>
              </nav>
                          </MDBCardBody>
          </MDBCard>

          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://avatars.githubusercontent.com/u/97670921?v=4' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Idrees Al Masri</MDBCardTitle>
              <MDBCardText>
                Software developer
              </MDBCardText>
              <nav>
                <a href=''><TiSocialFacebook /></a>
                <a href=''><TiSocialGithub /></a>
                <a href=''><TiSocialLinkedin /></a>
                <a href=''><TiSocialTwitter /></a>
              </nav>
                          </MDBCardBody>
          </MDBCard>

          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://avatars.githubusercontent.com/u/96412602?v=4' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Saad Alzoubi</MDBCardTitle>
              <MDBCardText>
                Software developer
              </MDBCardText>
              <nav>
                <a href=''><TiSocialFacebook /></a>
                <a href=''><TiSocialGithub /></a>
                <a href=''><TiSocialLinkedin /></a>
                <a href=''><TiSocialTwitter /></a>
              </nav>
                          </MDBCardBody>
          </MDBCard>


          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://cdn.discordapp.com/attachments/961226787273191455/991713500722380860/Polish__213926809.jpg' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Marah Al Refai</MDBCardTitle>
              <MDBCardText>
                Software developer
              </MDBCardText>
              <nav>
                <a href=''><TiSocialFacebook /></a>
                <a href=''><TiSocialGithub /></a>
                <a href=''><TiSocialLinkedin /></a>
                <a href=''><TiSocialTwitter /></a>
              </nav>
                          </MDBCardBody>
          </MDBCard>
          
          <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://cdn.discordapp.com/attachments/961226787273191455/991714063203700746/kkk.jpg' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>Marah Jaradat</MDBCardTitle>
              <MDBCardText>
                Software developer
              </MDBCardText>
              <nav>
                <a href=''><TiSocialFacebook /></a>
                <a href=''><TiSocialGithub /></a>
                <a href=''><TiSocialLinkedin /></a>
                <a href=''><TiSocialTwitter /></a>
              </nav>
                          </MDBCardBody>
          </MDBCard>



        </div>
      </div>
    </div>
  );
};

export default About;
