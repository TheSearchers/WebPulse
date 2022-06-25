import React, { useContext, useEffect, useRef, useState } from "react"
import './Chat.css'
import io from "socket.io-client"
// import TextField from "@material-ui/core/TextField"
import TextField from '@mui/material/TextField';
import sendIcon from "../assets/send.png";
import { LoginContext } from "../Auth/auth";
import { When } from "react-if";
export default function ChatSection (props){
  //const { onTextChange, renderChat , onMessageSubmit }= props;
const auth=useContext(LoginContext)
const [ state, setState ] = useState({ message: "", name: "" })
  const [ chat, setChat ] = useState([])
  
  const socketRef = useRef()
  
  
  useEffect(
    () => {
      socketRef.current = io.connect(`http://localhost:3000`)
      socketRef.current.on("message", ({ name, message }) => {
        setChat([ ...chat, { name, message } ])
      })
      return () => socketRef.current.disconnect()
    },
    [ chat ]
  )
  
  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value,"name":auth.currUser})
  }
  
  const onMessageSubmit = (e) => {
    const { name, message } = state
    socketRef.current.emit("message", { name, message })
    e.preventDefault()
    setState({ message: "", name })
  }
  
  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <When condition={name===auth.currUser}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
        </When><br/>
        <When condition={name!==auth.currUser}>
          <h3 className="comming" >
          <span>{message}</span>: {name}
        </h3>
        </When><br/>
      </div>
    ))
  }
  return(
  <>
  <When condition={auth.loggedIn}>
	<aside className="card">
				
        <form onSubmit={onMessageSubmit}>
  
        {/* <h4> {name} </h4> */}
          <div className="render-chat">
        
          {renderChat()}
        </div>
  
  
          <span >
            <TextField
              name="message"
              onChange={(e) => onTextChange(e)}
              value={state.message}
              id="outlined-multiline-static"
              variant="outlined"
              label="Message"
              
            />
              <button >
  
              <img alt="send" src={sendIcon} />
              <span style={{ display: "inline-block",
            color: "white"}}>Send</span>
              </button>
          </span>
        
        </form>
      
      </aside>
      </When>
  </>
  )}