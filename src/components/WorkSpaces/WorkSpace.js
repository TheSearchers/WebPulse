
import { useContext, useState, useEffect } from "react";
import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { LoginContext } from "../Auth/auth";
import axios from 'axios';
import cookie from 'react-cookies';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';




export default function Workspace(props) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  const [friendModal, setFriendModal] = useState(false)
  const showModal = () => setFriendModal(!friendModal);
  const [show, setShow] = useState(false);
  const auth = useContext(LoginContext)
  const [workspaces, setWorkspaces] = useState([]);
  const [createWorkspace, setCreateWorkspace] = useState({
    workspace_name: ""
  });
  console.log(auth);
  const [savedRequests, setSavedRequests] = useState()

  async function getWorkSpaces() {
    console.log('autttthhhh', auth)
    const res = await axios.get(`${auth.API}/user/${auth.user.user_id}`, {
      headers: {

        "Authorization": `Bearer ${cookie.load("userData").token}`,
      },
    })
    setWorkspaces(res.data.workSpaceTables)
  }
  async function createWorkSpace(event) {
    event.preventDefault();
    if (createWorkspace.workspace_name !== "" && createWorkspace.workspace_name !== null) {
      const res = await axios({
        method: 'post',
        url: `${auth.API}/workspace/${auth.user.user_id}`,
        headers: {

          "Authorization": `Bearer ${cookie.load("userData").token}`,
        },
        data: createWorkspace

      })
    }
    toggleShow();
    getWorkSpaces()
  }
  function handleChange(event) {
    event.preventDefault();
    setCreateWorkspace({ ...createWorkspace, [event.target.name]: event.target.value })
  }

  async function deleteItem(item) {
    console.log(item.workspace_id);
    const res = await axios.delete(`${auth.API}/workspace/${item.workspace_id}`, {
      headers: {

        "Authorization": `Bearer ${cookie.load("userData").token}`,
      },
    })
    handelShowRequests(props.workspace_id)
    getWorkSpaces()
  }
  async function addFreind(val) {
    // e.preventDefault()
    console.log("kkkkkkk", val);
    const res = await axios({
      method: 'post',
      url: `${auth.API}/workspace-addfriend/${val}`,
      headers: {

        "Authorization": `Bearer ${cookie.load("userData").token}`,
      },
      data: createWorkspace

    })
    showModal();

  }
  async function handelShowRequests(workspace_id) {

    const res = await axios.get(`${auth.API}/workspace/${workspace_id}/saved-req`, {
      headers: {

        "Authorization": `Bearer ${cookie.load("userData").token}`,
      },
    })
    //let item =document.getElementById('request-'+workspace_id);
    //item.innerHTML = 'Test';
    setSavedRequests(res.data)
    console.log(res.data);
  }
  async function deleteRequest(item) {
    const res = await axios.delete(`${auth.API}/workspace/${props.workSpace_id}/remove-req/${item.id}`, {
      headers: {

        "Authorization": `Bearer ${cookie.load("userData").token}`,
      },
    })
    handelShowRequests(item.workspace_id)
    getWorkSpaces()

  }

  useEffect(() => {
    getWorkSpaces()
  }, [auth.user.user_id])

  return (
    <div className="workspace-main-block">

      <h2 className="getdude-block-title">WorkSpaces <button className="btn btn-success" onClick={toggleShow}>+</button></h2>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Add WorkSpace</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody> <input onChange={handleChange}
              name="workspace_name"
              placeholder="WorkSpace name"
              required
            /></MDBModalBody>

            <MDBModalFooter>

              <MDBBtn onClick={createWorkSpace}>CREATE</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <div>
        {workspaces ? workspaces.map((item, index) => {
          return (
            <>
              <ListItem disablePadding key={index}>
                <ListItemButton
                  id={item.workspace_id}
                  onClick={() => {
                    props.setWorkSpaceId(item.workspace_id);
                    console.log(props.workSpace_id);
                    handelShowRequests(item.workspace_id);
                  }}
                >
                  <ListItemIcon >
                    <PersonAddIcon onClick={showModal} />
                    <MDBModal show={friendModal} setShow={setFriendModal} tabIndex='-1'>
                      <MDBModalDialog size='sm'>
                        <MDBModalContent>
                          <MDBModalHeader>
                            <MDBModalTitle>Add a New User</MDBModalTitle>

                          </MDBModalHeader>
                          <MDBModalBody> <input onChange={handleChange}
                            name="workspace_name"
                            placeholder="Email"
                            required
                          /></MDBModalBody>
                          <MDBBtn onClick={(e)=>addFreind(item.workspace_id)}>ADD</MDBBtn>
                        </MDBModalContent>
                      </MDBModalDialog>
                    </MDBModal>
                  </ListItemIcon>
                  <ListItemText primary={item.workspace_name} />
                  <ListItemIcon >
                    <DeleteIcon onClick={() => deleteItem(item)} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <div id={`request-${item.workspace_id}`} className='saved-request-list-item'>
                {savedRequests ? savedRequests.map((child, index) => {
                  return (
                    child.workspace_id == item.workspace_id ?
                      <ListItem disablePadding key={index}
                      >
                        <ListItemButton
                          id={child.workspace_id}
                        >

                          <ListItemText primary={`${child.method_name} ${child.url_name}`} />
                          <ListItemIcon >
                            <DeleteIcon onClick={() => deleteRequest(child)} />
                          </ListItemIcon>
                        </ListItemButton>
                      </ListItem> : null

                  )
                }) : null}

              </div>
            </>
          )
        }) : null}
      </div>
    </div>
  )
}





