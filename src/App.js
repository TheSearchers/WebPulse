import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/index";
import Signin from "./components/form/signin";
import Signup from "./components/form/signup";
import LoginProvider from "./components/Auth/auth";
import { LoginContext } from "./components/Auth/auth";
import { useContext } from "react";
import message from "./components/assets/message.webp";
import Workspace from "./components/WorkSpaces/WorkSpace";
import axios from 'axios';
import cookie from 'react-cookies';
import ChatPage from "./components/Chat/ChatPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {
  Home,
  History,
  ResponseTable,
  RequestTable,
  UrlInput,
  Footer,
} from "./all";

import socket from "./socket";
//---------------------------
toast.configure();

const App = () => {
  //-----------------------------
  //chat
  const [showChat, setShowChat] = useState(false);
  const [showImgChat, setShowImgChat] = useState(true);
  const [userName, setUserName] = useState("");
  const [usersList, addUsers] = useState([]);
  //const [messages, setMessages] = useState([]);
  const handleChatImg = () => {
    setShowImgChat(true)
    setShowChat(false)
  };

  const handleChatImgLogOut = () => {

    setShowImgChat(true)
    setShowChat(false)
    setUserName(null)
    console.log(" after log out  ", userName)
  };

  const getUsername = (fetched_userName) => {
    //console.log("+++++ "+usersList.includes(fetched_userName))

    setUserName(fetched_userName);
    //socketio-auth implements two-step authentication: upon connection, the server marks the clients as unauthenticated and listens to an authentication event. If a client provides wrong credentials or doesn't authenticate after a timeout period it gets disconnected. 
    socket.auth = { fetched_userName };

    socket.connect();
  };

  socket.on("users", (users) => {
    users.forEach((user) => {
      user.self = user.userID === socket.id;
    });
    users = users.sort((a, b) => {
      if (a.self) return -1;
      if (b.self) return 1;
      if (a.username < b.username) return -1;
      return a.username > b.username ? 1 : 0;
    });
    //console.log(users)
    console.log("users socket   " + users);
    addUsers(users);
  });

  socket.on("user connected", (user) => {

    console.log(user);
    addUsers([...usersList, user]);
  });

  //----------------------
  const auth = useContext(LoginContext);
  const [history_id, setHistory_id] = useState();
  const [workSpace_id, setWorkSpaceId] = useState();
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("");
  const [body, setBody] = useState("");
  const [headers, setHeaders] = useState("");
  const [history, setHistory] = useState([]);
  const [responseData, setResponseData] = useState("");
  const [responseHeaders, setResponseHeaders] = useState({});
  const [responseCookie, setResponseCookie] = useState("");
  const [responseStatus, setResponseStatus] = useState("null");

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  useEffect(() => {
    setMethod("GET");
    setUrl("");
    setHeaders(
      `{\n"Access-Control-Allow-Origin":"*",\n"Content-Type":"application/json"\n}`
    );
    setBody("{\n\n}");
  }, []);

  const clearResponseTable = () => {
    setResponseData("");
    setResponseHeaders({});
    setResponseCookie("");
  };

  const sendHandler = async () => {
    try {
      const id = Math.random();
      setHistory([
        ...history,
        { id: id.toString(), url, method, headers, body },
      ]);

      // headers operation
      const parsedHeaders = new Headers(JSON.parse(headers));

      const res = await fetch(url, {
        headers: parsedHeaders,
        body: method !== "GET" ? body : undefined,
        method: method,
        credentials: "include",
      });
      const data = await res.json();

      // set the response table

      setResponseHeaders((headers) => {
        headers = {}; // reset headers object values
        for (const pair of res.headers.entries()) {
          headers[pair[0]] = pair[1];
        }
        return headers;
      });

      if (data) setResponseData(JSON.stringify(data));
      if (document.cookie) setResponseCookie(document.cookie);
      setResponseStatus(res.status);
      toast.success("Successful", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error("Error!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(error); //
    }
  };
  async function saveRequest(e) {
    e.preventDefault();
    // console.log(auth.API);
    const res = await axios({
      method: 'post',
      url: `https://web-pulse-api.herokuapp.com/workspace/${workSpace_id}/create-req`,
      headers: {

        "Authorization": `Bearer ${cookie.load("userData").token}`,
      },
      data: {
        url_name: url,
        method_name: method,
      }

    })


  }
  return (
    <>

      <LoginProvider>
        <Header handleChatImgLogOut={handleChatImgLogOut} handleChatImg={handleChatImg} usersList={usersList} submit={(event) => getUsername(event)} />
        {/* <When condition={!auth.loggedIn}> */}
        <Signin />
        <Signup />
        {/* </When>
        <Workspace setWorkSpaceId={setWorkSpaceId}
          workSpace_id={workSpace_id}
          setHistory_id={setHistory_id}
          history_id={history_id} /> */}
        {/* </When> */}

      </LoginProvider>


      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/getDude" element={


<div
className="row justify-content-between gap-5 request-conteiner g-0"
style={{
  display: "flex",
  justifyContent: "center",
  marginTop: "0px",
}}
>


              <div className="col-4">
                <History
                  history={history}
                  setMethod={setMethod}
                  setHeaders={setHeaders}
                  setUrl={setUrl}
                  setBody={setBody}
                  clearResponseTable={clearResponseTable}
                /> 
                      <LoginProvider>
                <Workspace setWorkSpaceId={setWorkSpaceId}
                  workSpace_id={workSpace_id}
                  setHistory_id={setHistory_id}
                  history_id={history_id} /> 
                  </LoginProvider>

               </div> 
                <div className="col">
            <div className="d-flex flex-column justify-content-between align-items-center">                    <UrlInput
                      url={url}
                      setUrl={setUrl}
                      method={method}
                      setMethod={setMethod}
                      setHeaders={setHeaders}
                    /> ,
                    <RequestTable
                      body={body}
                      setBody={setBody}
                      headers={headers}
                      setHeaders={setHeaders}
                      sendHandler={sendHandler}
                      workspace_id={workSpace_id}
                      saveRequest={saveRequest}
                    /> ,
                    <ResponseTable
                      responseData={responseData}
                      responseCookie={responseCookie}
                      responseHeaders={responseHeaders}
                      responseStatus={responseStatus}
                    />
                  </div>
                </div>
              </div>


          } />


        </Routes>
      </BrowserRouter>

      <span style={{ backgroundColor: "white" }} className="span1">
        {/* chat  */}
        {showChat ?
          <div stclassName="span2" style={
            {
              width: '30'
            }
          }>
            {!userName ? (
              // <LoginTest submit={(event) => getUsername(event)} />
              //alert("Please logIn befor you open the Chat "),
              toast.error("Please logIn befor you open the Chat !", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
              ,
              setShowChat(false),
              setShowImgChat(true)
            ) : (
              <ChatPage handleChatImg={handleChatImg} user={userName} connectedUsers={usersList} />
            )}
          </div> : null

        }
        {/* chat */}
      </span>
      {showImgChat ?
        <img src={message}
        style={{

          position: 'fixed',
          bottom: '30px',
          right: '30px',
          transform: 'rotate(-90deg)'

        }}
          alt="" width="65px" height="auto"
          onClick={() => {
            setShowChat(!showChat)
            setShowImgChat(!showImgChat)
          }
          }></img>
        : null

      }
      <Footer />
    </>
  );
};

export default App;
