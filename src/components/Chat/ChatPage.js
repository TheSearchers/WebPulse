import './style.css'
import React, { useState } from "react";
import Chatwindow from "./Chatwindow";
import Sidebar from "./Sidebar";
let k = " "
const Home = (props) => {
  const [selectedUser, setSelectedUser] = useState({});
  const [userSelected, setUserSelected] = useState(false);

  const getSelectedUser = (user) => {
    setSelectedUser(user);
    setUserSelected(true);

  };

  return (
    <div>
      <div className="currentUser"> {props.user}
        <label style={{
          marginLeft: "280px"
        }} onClick={() => props.handleChatImg()} > close</label></div>

      <div className="messenger">
        {userSelected ? (
          <div className="chatBox">
            <Chatwindow
              selectedUser={selectedUser}
              connectedUsers={props.connectedUsers}
            />
          </div>

        ) : (
          <div style={{ minWidth: "300px" }} className="noConversationText">Start messaging</div>
        )}

        <div className="chatMenuWrapper">
          {/* <div > <h3>{props.user}</h3>
        <h6>Online</h6></div>
       <hr/> */}
          <h5>Online</h5>
          <br />
          <div className="chatOnline">

            <Sidebar
              connectedUsers={props.connectedUsers}
              selectUser={getSelectedUser}

            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default Home;
