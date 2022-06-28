import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBCardHeader } from "mdb-react-ui-kit";
import { MDBInputGroup, MDBBtn, MDBCollapse } from "mdb-react-ui-kit";
import "../history/history.css";
import "./workspace.css";

export default function WorkSpaceForm() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  const [workSpace, setworkSpace] = useState("");

  const showForm = () => {
    setShow(!show);
  };
  const showData = () => {
    setData(!data);
  };
  const handlWorkSpace = (event) => {
    event.preventDefault();
    let newWorkSpace = event.target.value;
    setworkSpace(newWorkSpace);
  };

  return (
    <React.Fragment>
      <ul className="list-group ms-5 d-inline-block full-width">
        <MDBBtn onClick={showForm} color="dark">
          Add WorkSpace
        </MDBBtn>
        <MDBCollapse show={show}>
          {!show ? (
            <div></div>
          ) : (
            <div>
              {showForm && (
                <MDBCard
                  background="dark"
                  className="text-white"
                  style={{ maxWidth: "18rem" }}
                >
                  <MDBCardHeader>Add new WorkSpace</MDBCardHeader>
                  <MDBCardBody>
                    <MDBInputGroup className="mb-3">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="WorkSpace Name"
                        onChange={handlWorkSpace}
                      />
                      <MDBBtn
                        style={{ backgroundColor: "gray" }}
                        onClick={showData}
                      >
                        create
                      </MDBBtn>

                      <>
                        {/* <li
                              key={requestItem.id}
                              id={requestItem.id}
                              className="list-group-item d-flex btn justify-content-between align-items-center pe-2 border-1 border-warning border-top-0"
                            >
                              {requestItem.url}
                              <span className="badge bg-primary rounded-pill">
                                {requestItem.method}
                              </span>
                            </li> */}
                      </>
                    </MDBInputGroup>
                  </MDBCardBody>
                </MDBCard>
              )}
            </div>
          )}
        </MDBCollapse>
      </ul>
      {!data ? (
        <div></div>
      ) : (
        <div class="data">
          <br></br>

          <h3>
            <span className="badge badge-primary">{workSpace}</span>
          </h3>
          <br></br>
          <h4>
            <span className="badge badge-pill badge-warning">collection 1</span>
          </h4>

          <li className="list-group-item d-flex btn justify-content-between align-items-center pe-2 border-1 border-warning border-top-0">
            <p>https://jsonplaceholder.typicode.com/todos</p>
            <span className="badge bg-primary rounded-pill">
              <>get</>
            </span>
          </li>
          <li className="list-group-item d-flex btn justify-content-between align-items-center pe-2 border-1 border-warning border-top-0">
            <p>https://jsonplaceholder.typicode.com/todos</p>
            <span className="badge bg-primary rounded-pill">
              <>post</>
            </span>
          </li>
          <li className="list-group-item d-flex btn justify-content-between align-items-center pe-2 border-1 border-warning border-top-0">
            <p>https://jsonplaceholder.typicode.com/todos/1</p>
            <span className="badge bg-primary rounded-pill">
              <>delete</>
            </span>
          </li>
          <li className="list-group-item d-flex btn justify-content-between align-items-center pe-2 border-1 border-warning border-top-0">
            <p>https://jsonplaceholder.typicode.com/todos/1</p>
            <span className="badge bg-primary rounded-pill">
              <>update</>
            </span>
          </li>
        </div>
      )}
    </React.Fragment>
  );
}
