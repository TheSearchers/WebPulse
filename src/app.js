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
import message from "./components/assets/message.webp"

//import ChatSection from "./components/ChatSection/ChatSection";

//--------------------------
//chat
import ChatPage from "./components/Chat/ChatPage";
import LoginTest from "./components/Chat/Login";
import {
  WorkSpaceForm,

  History,
  ResponseTable,
  RequestTable,
  UrlInput,
  Footer,

} from "./all";



import socket from "./socket";
import { display } from "@mui/system";
//---------------------------
toast.configure();

const App = () => {
  //-----------------------------
  //chat 
  const [show, setShow] = useState(false);
  const [userName, setUserName] = useState("");
  const [usersList, addUsers] = useState([]);
  //const [messages, setMessages] = useState([]);

  const getUsername = (fetched_userName) => {
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
    addUsers(users);
  });

  socket.on("user connected", (user) => {
    addUsers([...usersList, user]);
  });

  //----------------------
  const auth = useContext(LoginContext);
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
  return (
    <React.Fragment>
      <div style={{backgroundColor:"ghostwhite"}} className="container-lx" >
        {/* <Header /> */}
        <LoginProvider>
          <Header submit={(event) => getUsername(event)} />
          {/* <When condition={!auth.loggedIn}> */}
          <Signin />
          <Signup />
          {/* </When> */}

        </LoginProvider>
        <div className="ssss">
        <div>
          <span style={{backgroundColor:"white"}}className="span1">
            {/* chat  */}
            {show ?
              <div stclassName="span2" style={
                {
                  width: '30'
                }
              }>
                {!userName ? (
                  // <LoginTest submit={(event) => getUsername(event)} />
                  alert("Please logIn befor you open the Chat "),
                  setShow(false)
                ) : (
                  <ChatPage user={userName} connectedUsers={usersList} />
                )}
              </div> : null

            }
            {/* chat */}
          </span>
        
            <span className="span2" >
  
            <div style={{
              marginLeft:"100px"
            }} >
              <UrlInput
                url={url}
                setUrl={setUrl}
                method={method}
                setMethod={setMethod}
                setHeaders={setHeaders}
              />
              <RequestTable
                body={body}
                setBody={setBody}
                headers={headers}
                setHeaders={setHeaders}
                sendHandler={sendHandler}
              />
              <ResponseTable
                responseData={responseData}
                responseCookie={responseCookie}
                responseHeaders={responseHeaders}
                responseStatus={responseStatus}
              />
            </div>
          
          </span>
          <span className="span3"
          >
          <div className="req_His_btn">
            <History
              history={history}
              setMethod={setMethod}
              setHeaders={setHeaders}
              setUrl={setUrl}
              setBody={setBody}
              clearResponseTable={clearResponseTable}
            />
            <WorkSpaceForm />
          </div>
        </span>
        </div>
        <img src={message}
        style={{
          marginLeft:"40px",
          marginBottom:"30px"
        }}
          alt="" width="100px" height="100px"
          onClick={() => setShow(!show)}></img>

       
      </div>
      </div>
    
       <Footer />
      
    </React.Fragment>
  );
};

export default App;
