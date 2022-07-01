import { io } from "socket.io-client";
const URL = "https://web-pulse-api.herokuapp.com";

const socket = io(URL, { autoConnect: false });
//Adds a listener that will be fired when any event is emitted.
socket.onAny((event, ...args) => {
  console.log(event, args);
});
export default socket;
