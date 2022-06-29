import { useContext,useState } from "react";
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
export default function Workspace(props){
const auth=useContext(LoginContext)
const [workspaces,setWorkspaces]=useState();
const [createWorkspace,setCreateWorkspace]=useState({
    workspace_name:""
});

const [savedRequests,setSavedRequests]=useState()

async function  getWorkSpaces(){
        const res=await axios.get(`${auth.API}/user/${auth.user.user_id}`, {
            headers: {
                
              "Authorization": `Bearer ${cookie.load("userData").token}`,
            },
          })
          setWorkspaces(res.data.workSpaceTables)
    }
    async function createWorkSpace(event){
        event.preventDefault();
        if(createWorkspace.workspace_name!==""&&createWorkspace.workspace_name!==null){
            const res=await axios({
                method: 'post',
                url:`${auth.API}/workspace/${auth.user.user_id}`, 
                headers: {
          
                  "Authorization": `Bearer ${cookie.load("userData").token}`,
                },
                data:createWorkspace
                
              })
        }
    }
    function handleChange(event){
        event.preventDefault();
        setCreateWorkspace({...createWorkspace,[event.target.name] : event.target.value})
    }
    
    async function deleteItem(item){
        console.log(item.workspace_id);
        const res=await axios.delete(`${auth.API}/workspace/${item.workspace_id}`, {
            headers: {
                
              "Authorization": `Bearer ${cookie.load("userData").token}`,
            },
          })
    }
    async function addFreind(item){
        
        console.log(item.workspace_id);
        const res=await axios({
            method: 'post',
            url:`${auth.API}/workspace-addfriend/${item.workspace_id}`, 
            headers: {
      
              "Authorization": `Bearer ${cookie.load("userData").token}`,
            },
            data:createWorkspace
            
          })
    }
    async function handelShowRequests(workspace_id){
        
        const res=await axios.get(`${auth.API}/workspace/${workspace_id}/saved-req`, {
            headers: {
                
              "Authorization": `Bearer ${cookie.load("userData").token}`,
            },
          })
          setSavedRequests(res.data)
          console.log(res.data);
    }
    async function deleteRequest(item){
        const res=await axios.delete(`${auth.API}/workspace/${props.workSpace_id}/remove-req/${item.id}`, {
            headers: {
                
              "Authorization": `Bearer ${cookie.load("userData").token}`,
            },
          })
    }
    return(
        <>
        <button onClick={getWorkSpaces}>My workspaces</button>
        <form>
        <input onChange={handleChange}
        name="workspace_name"
        placeholder="Enter workspace name or email if you want to invite"
        required
        />
        <button onClick={createWorkSpace}>create work space</button>
        </form>
        
        {workspaces?workspaces.map((item,index)=>{
            return(
                <ListItem disablePadding key={index}>
                    <ListItemButton 
                    id={item.workspace_id}
                    onClick={()=>{
                        props.setWorkSpaceId(item.workspace_id);
                        handelShowRequests(item.workspace_id);
                    }}
                      >
                        <ListItemIcon >
                      <PersonAddIcon onClick={()=>addFreind(item)}/>
                      </ListItemIcon>
                      <ListItemText primary={item.workspace_name} />
                      <ListItemIcon >
                      <StarIcon onClick={()=>deleteItem(item)}/>
                      </ListItemIcon>
                      </ListItemButton>
                </ListItem>
                
            )
        }):null}
        {savedRequests ? savedRequests.map((item,index)=>{
            return(
                <ListItem disablePadding key={index}
                >
                    <ListItemButton 
                    id={item.workspace_id}
                      >
                        <ListItemIcon >
                      <PersonAddIcon />
                      </ListItemIcon>
                      <ListItemText primary={`${item.method_name} ${item.url_name}`} />
                      <ListItemIcon >
                      <StarIcon onClick={()=>deleteRequest(item)}/>
                      </ListItemIcon>
                      </ListItemButton>
                </ListItem>
                
            )
        }):null}
        </>
    )
}