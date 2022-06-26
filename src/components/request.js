import React from "react";
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';
// import { useState , useEffect } from "react";
// import ClipLoader from "react-spinners/ClipLoader";

// import { MDBInput } from "mdbreact";

const RequestTable = ({ sendHandler, body, setBody, headers, setHeaders }) => {


  // const [loading , setLoading] = useState(false)
  // useEffect(() =>{
  //   setLoading(true);
    
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },2000)

  // },[])


  
  return (
    <React.Fragment>
      <div className="mb-3">
     

        <MDBBtnGroup shadow='0'
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <MDBBtn color='dark'
            
            data-bs-toggle="pill"
            data-bs-target="#pills-body"
            type="button"
            role="tab"
            aria-controls="pills-body"
            aria-selected="true"
          >Body</MDBBtn>


          <MDBBtn color='dark'
            
            data-bs-toggle="pill"
            data-bs-target="#pills-headers"
            type="button"
            role="tab"
            aria-controls="pills-headers"
            aria-selected="false"
          >Headers</MDBBtn>


           <MDBBtn color='danger'
            data-bs-toggle="pill"
            type="button"
            role="tab"
            aria-controls="pills-headers"
            aria-selected="false"
          >Save To Workspace</MDBBtn>



          <MDBBtn color='success'
             onClick={sendHandler}
             
          >Send</MDBBtn>
        </MDBBtnGroup>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-body"
            role="tabpanel"
            aria-labelledby="pills-body-tab"
          >
            <textarea
              name="body"
              className="bg-light border border-1 rounded p-3 json-pretty"
              id="body"
              value={body}
              cols="70"
              rows="10"
              style={{
                width: "605px",
                height: "246px",
              }}
              
              onChange={e => setBody(e.target.value)}
            ></textarea>
          </div>
          <div
            className="tab-pane fade"
            id="pills-headers"
            role="tabpanel"
            aria-labelledby="pills-headers-tab"
          >
            <textarea
              name="headers"
              className="bg-light border border-1 rounded p-3"
              value={headers}
              id="headers"
              cols="70"
              rows="10"
              style={{
                width: "605px",
                height: "246px",
              }}
              onChange={e => setHeaders(e.target.value)}
            >
              {headers}
            </textarea>
          </div>
        </div>
      </div>











    </React.Fragment>
  );
};

export default RequestTable;



