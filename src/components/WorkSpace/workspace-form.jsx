import { useState } from "react";
import { MDBCard, MDBCardBody, MDBCardHeader } from "mdb-react-ui-kit";
import { MDBInputGroup, MDBBtn, MDBCollapse } from "mdb-react-ui-kit";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StarIcon from "@mui/icons-material/Star";
import "../history/history.css";
import "./workspace.css";

export default function WorkSpaceForm(props) {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(false);
  const [workSpace, setworkSpace] = useState("");
const [friend,setFriend]=useState({
  workspace_name:""
})

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
function handleChange(event){
  
    event.preventDefault();
    setFriend({...friend,[event.target.name] : event.target.value})
    console.log(friend);

}
  return (
    <React.Fragment>
      <ul className="list-group ms-5 d-inline-block full-width">
        <MDBBtn
          onClick={() => {
            showForm();
            props.getWorkSpaces();
          }}
          color="dark"
          style={{ width: "20%" }}
        >
          My WorkSpace
        </MDBBtn>

        <MDBCollapse style={{ color: "white" }} show={show}>
          {!show ? (
            <div></div>
          ) : (
            <div>
              {showForm && (
                <div className="list">
                  <MDBInputGroup className="mb-3">
                    <input
                      onChange={handleChange}
                      name="workspace_name"
                      className="form-control"
                      placeholder="Enter email to add friend"
                      required
                    />
                  </MDBInputGroup>
                  {props.workspaces
                    ? props.workspaces.map((item, index) => {
                        return (
                          <ListItem disablePadding key={index}>
                            <ListItemButton
                              id={item.workspace_id}
                              onClick={() => {
                                props.setWorkSpaceId(item.workspace_id);
                                props.handelShowRequests(item.workspace_id);
                              }}
                            >
                              <ListItemIcon>
                                <PersonAddIcon
                                  onClick={() => props.addFreind(item)}
                                />
                              </ListItemIcon>
                              <ListItemText primary={item.workspace_name} />
                              <ListItemIcon>
                                <StarIcon
                                  onClick={() => props.deleteItem(item)}
                                />
                              </ListItemIcon>
                            </ListItemButton>
                          </ListItem>
                        );
                      })
                    : null}
                </div>
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
