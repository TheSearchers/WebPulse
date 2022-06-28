import React from "react";
import { useState } from "react";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import "./history.css";

const History = ({
  history,
  setHeaders,
  setMethod,
  setUrl,
  setBody,
  clearResponseTable,
}) => {
  const clickHistoryItemHandler = (e) => {
    const itemId = e.currentTarget.id;
    const requestItemConfig = history.find((item) => item.id === itemId);
    console.log(requestItemConfig);

    // set the data that exist in request item configuartion
    setMethod(requestItemConfig.method);
    setHeaders(requestItemConfig.headers);
    setUrl(requestItemConfig.url);
    setBody(requestItemConfig.body);

    clearResponseTable(); // clear the data of response table
  };

  const [show, setShow] = useState(false);

  //   const handleShow=()=>setShow(!show)

  const toggleShow = () => setShow(!show);

  return (
    <React.Fragment>
      <ul className="list-group ms-5 d-inline-block full-width">
        {/* <li className="list-group-item d-flex justify-content-center align-items-center pe-2 border-1 border-warning"> */}
        {/* <h3 onClick={()=>handleShow()} className="text-warning">History Table</h3> */}
        <MDBBtn onClick={toggleShow} color="dark">
          Your Requests
        </MDBBtn>
        {/* </li> */}
        <MDBCollapse show={show}>
          {!show ? (
            <div></div>
          ) : !history.length ? (
            <div className="text-center">No Requests have been made</div>
          ) : (
            <MDBTable className='table-info' style={{marginLeft : '50px'}}>
              <MDBTableHead>
                <tr>
                  <th scope='col'>Method</th>
                  <th scope='col'>URL</th>
                </tr>

              </MDBTableHead>
              <MDBTableBody>
             { history.map((requestItem) => (
                <tr>
                  
                  <th scope='row'
                    key={requestItem.id}
                    id={requestItem.id}
                    onClick={clickHistoryItemHandler}
                  >{requestItem.method}</th>
                 
                  <td> {requestItem.url}</td>
                </tr>
             
              ))}
              </MDBTableBody>
              </MDBTable>
          )}
            </MDBCollapse>
      </ul>
    </React.Fragment>
  );
};


export default History;

