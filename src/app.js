
import React, { useEffect, useState } from "react";
import "./app.css"
import {
  History,
  ResponseTable,
  RequestTable,
  UrlInput,
  Header,
} from "./all";

// toast.configure();

const App = () => {
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
    setMethod("GET");
    setUrl("http://localhost:3000");
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



    } catch (error) {
      console.log(error); // 
    }
  };
  return (
    <React.Fragment>

      <div className="container-lx">
        <Header />

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
    </React.Fragment>

  );
};


export default App;

