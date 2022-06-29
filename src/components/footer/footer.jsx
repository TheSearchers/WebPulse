// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
 

//   MDBIcon
// } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBFooter className='bg-dark text-center text-white'>
//       <MDBContainer className='p-4 pb-0'>
//         <section className='mb-4'>
//           <a className='btn btn-outline-light btn-floating m-1' href='dr.mohammed.j.awadallah@gmail.com' role='button'>
//             <MDBIcon fab icon='google' />
//           </a>
//           <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/hxh_jazz/' role='button'>
//             <MDBIcon fab icon='instagram' />
//           </a>

//           <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
//             <MDBIcon fab icon='linkedin-in' />
//           </a>

//           <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/TheSearchers' role='button'>
//             <MDBIcon fab icon='github' />
//           </a>
//         </section>
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2022 Copyright:
//         <a className='text-white' href='https://www.instagram.com/asac.ltuc/?hl=en'>
//           ASAC: The Searchers
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }


import React from "react";

import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">chat</li>
            <li className="py-1">email</li>
            <li className="py-1">Guides</li>
          </ul>
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
            <button className="p-2 mb-4">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 The Searchers All Rights reserved.</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
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
