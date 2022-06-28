import React, { useEffect, useState } from "react";

import superagent from "superagent";
import jwt from "jwt-decode";
import cookie from "react-cookies";
import base64 from "base-64";
import swal from "sweetalert";

const API = `http://localhost:3000`;
export const LoginContext = React.createContext();

export default function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [registered, setRegistred] = useState(false);
  const [display, setDisplay] = useState(false);
  const [currUser, setCurrUser] = useState("unnamed");
  const [open, setOpen] = useState(false);

  const renderedForm = () => {
    setRegistred(!registered);
  };

  const displayForm = () => {
    setDisplay(!display);
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const login = async (userInfo) => {
    // localhost:3030/signin
    console.log(userInfo);
    const response = await superagent
      .post(`${API}/login`)
      .set(
        "authorization",
        `Basic ${base64.encode(`${userInfo.email}:${userInfo.password}`)}`
      );
    console.log("inside login >> response", response); //userInfo + token
    if (
      response.text === "invalid login Password" ||
      response.text === "invalid login Username"
    ) {
      swal("You signed in wrongly, please sign in whith correct info ");
    }
    validateMyUser(response.body);
  };
  const signup = async (user) => {
    console.log(user);
    const response = await superagent.post(`${API}/register`).send(user);
    console.log(response.status);
    if (response.status === 200) {
      console.log(response.status);
      swal(
        "Good job!",
        "You signed up correctly, please log in now ",
        "success"
      );
      renderedForm();
    } else {
      swal("You signed up wrongly, please signup whith correct info ");
    }
  };
  const validateMyUser = (data) => {
    if (data) {
      const validUser = jwt(data);
      setCurrUser(validUser.username);
      console.log("lllll", validUser);
      console.log("valis u ", currUser);
      if (validUser) {
        setLoginstate(true, data);
        cookie.save("jwt", data);
      } else {
        setLoginstate(false, {});
      }
    } else {
      setLoginstate(false, {});
    }
  };

  const setLoginstate = (isLogged, userData) => {
    setLoggedIn(isLogged);
    setUser(userData);
  };

  const logout = () => {
    setLoggedIn(false);
    setUser({});
    cookie.remove("jwt");
    displayForm();
  };

  useEffect(() => {
    const myUserInfo = cookie.load("jwt");
    validateMyUser(myUserInfo);
  }, []);

  const canDo = (capability) => {
    // optional chaining
    return user?.actions?.includes(capability);
  };

  const state = {
    loggedIn: loggedIn,
    user: user,
    login: login,
    logout: logout,
    canDo: canDo,
    display: display,
    currUser: currUser,
    setCurrUser: setCurrUser,
    setDisplay: setDisplay,
    registered: registered,
    setRegistred: setRegistred,
    renderedForm: renderedForm,
    displayForm: displayForm,
    signup: signup,
    open: open,
    setOpen: setOpen,
    onOpenModal: onOpenModal,
    onCloseModal: onCloseModal,
  };

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
}
