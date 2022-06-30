
import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '../assets/getDude.gif'

const Footer = () => {
  return (

    <div className="w-full mt-10 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto flex gap-3 border-b-2 border-gray-600 py-8 top-footer">
        <div className="footer-about">
          <img style={{width : '100px'}} src={logo} alt="" />
          <p>The vision of this Web Application was to devolop a simpler and less complicated way of handling your RESTful API Operation in a simple and easy to learn approach with customer support around the clock </p>

        </div>

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our website</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 sub-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex max-w-[1240px] mx-auto justify-between sm:flex-row text-center text-gray-500 py-3 copy-right">
        <p className="">2022 The Searchers All Rights reserved.</p>
        <div className="flex gap-3">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />

          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;

