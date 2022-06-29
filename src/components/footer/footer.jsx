import React from "react";
import "../landing/landing.css";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

export default function App() {
  return (
    
     
      <footer>
        <div class="footer">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="dr.mohammed.j.awadallah@gmail.com"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/hxh_jazz/"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/TheSearchers"
              role="button"
            >
              <MDBIcon fab icon="github" />
            </a>
          </section>
          <p>
            {" "}
            &copy; 2022 <span> The Searchers</span> all rights reserved
          </p>
        </div>
      </footer>
   
  );
}
