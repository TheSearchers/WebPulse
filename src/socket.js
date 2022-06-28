import { io } from "socket.io-client";
const URL = "http://localhost:3000";

const socket = io(URL, { autoConnect: false });
//Adds a listener that will be fired when any event is emitted.
socket.onAny((event, ...args) => {
  console.log(event, args);
});
export default socket;
