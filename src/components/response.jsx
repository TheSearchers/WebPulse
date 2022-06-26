import React, { useEffect, useState } from "react";
import JSONPretty from "react-json-pretty";
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';

const ResponseTable = ({
  responseCookie,
  responseHeaders,
  responseData,
  responseStatus,
}) => {
  const [statusClassName, setStatusClassName] = useState("nav-item border rounded border-2 border-success")
  useEffect(() => {
    if (responseStatus >= 400) {
      setStatusClassName("nav-item border rounded border-2 border-danger");
    } else if (responseStatus >= 300) {
      setStatusClassName("nav-item border rounded border-2 border-warning");
    } else {
      setStatusClassName("nav-item border rounded border-2 border-success");
    }
  }, [responseStatus])
  return (
    <React.Fragment>
      <div className="mb-3">
        <MDBBtnGroup shadow='0'

          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <MDBBtn color='dark'
            id="pills-data-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-data"
            type="button"
            role="tab"
            aria-controls="pills-data"
            aria-selected="true"


          >Data</MDBBtn>





          <MDBBtn color='dark'
            id="pills-resheaders-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-resheaders"
            type="button"
            role="tab"
            aria-controls="pills-resheaders"
            aria-selected="false"
          >Headers</MDBBtn>




          <MDBBtn color='dark'
            id="pills-cookie-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-cookie"
            type="button"
            role="tab"
            aria-controls="pills-cookie"
            aria-selected="false"

          >Cookies</MDBBtn>
        </MDBBtnGroup>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-data"
            role="tabpanel"
            aria-labelledby="pills-data-tab"
          >
            <div
              className="data-content bg-light border border-1 rounded p-3"
              style={{
                width: "605px",
                height: "246px",
              }}
            >
              <JSONPretty data={responseData} mainStyle="background:#f8f9fa" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-resheaders"
            role="tabpanel"
            aria-labelledby="pills-resheaders-tab"
          >
            <div
              className="resheader-content bg-light border border-1 rounded p-3"
              style={{
                width: "605px",
                height: "246px",
              }}
            >
              <JSONPretty data={JSON.stringify(responseHeaders)} mainStyle="background:#f8f9fa" />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-cookie"
            role="tabpanel"
            aria-labelledby="pills-cookie-tab"
          >
            <div
              className="cookie-content bg-light border border-1 rounded p-3"
              style={{
                width: "605px",
                height: "246px",
              }}
            >
              {responseCookie}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResponseTable;



