import React from "react";

import logo from "../../assets/logo.png";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={logo} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img className="spoon__img" />
        <p className="p__opensans">
          We are a team of six students, start our trip <br />
          in programming since six months, and now <br />
          we are at the final step.
          <br /> Mohammad
          <br /> Osama
          <br /> Marah *2
          <br /> Idrees
          <br /> we decide to make something extraordinary for this day
        </p>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Story</h1>
        <img className="spoon__img" />
        <p className="p__opensans">
          as many stories <br />
          we are from different backgrounds,
          <br /> but we made a promise to help each other
          <br /> and make unforgatable work.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
