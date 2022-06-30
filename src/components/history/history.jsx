import React from "react";
import { useState } from "react";
import { MDBCollapse, MDBBtn } from "mdb-react-ui-kit";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
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
      <h2 className="getdude-block-title">Requests</h2>
      <div
        className="table-info data-table"
        
      >
        <div className="data-table-header">
          <span className="left">Method</span>
          <span className="right">URL</span>
        </div>
        <div className="data-table-body">
          {history.map((requestItem) => (
            <div>
              <div className="left"
                scope="row"
                key={requestItem.id}
                id={requestItem.id}
                onClick={clickHistoryItemHandler}
              >
                <span className={requestItem.method}>{requestItem.method}</span>
              </div>

              <div className="right"> {requestItem.url}</div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default History;
