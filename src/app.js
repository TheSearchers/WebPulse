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
import ChatSection from "./components/ChatSection/ChatSection";
import {
  WorkSpaceForm,

  History,
  ResponseTable,
  RequestTable,
  UrlInput,
  Footer,
  
} from "./all";

toast.configure();

const App = () => {
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
      <div className="container-lx">
        {/* <Header /> */}
        <LoginProvider>
          <Header />
          {/* <When condition={!auth.loggedIn}> */}
          <Signin />
          <Signup />
          {/* </When> */}
          <ChatSection />
        </LoginProvider>

        <div className="row justify-content-center g-5">
          <div className="col-4">
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
          <div className="col">
            <div className="d-flex flex-column justify-content-between align-items-center">
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
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
