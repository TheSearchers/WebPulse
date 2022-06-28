import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import  FooterOverlay  from './FooterOverlay'
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>

        <p className="p__opensans">E-mail: marahjaradat97@gmail.com</p>
        <a> contact with support</a>
      </div>

      <div className="app__footer-links_logo">
        <p className="p__opensans">
          &quot;if there is no dark, we will never learn how the light is. the
          inverse shows us the right&quot;
        </p>

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">24 hr support </h1>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 The Searchers All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
