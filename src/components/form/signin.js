import { useState, useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../Auth/auth";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function Signin() {
  //   const [registered, setRegistred] = useState(false);
  //   const  renderedForm=()=>{
  //     setRegistred(!registered)
  //   }
  const auth = useContext(LoginContext);
  // const [email,setEmail] = useState('');
  // const [password,setPassword] = useState('');
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setLogInInfo({ ...logInInfo, [event.target.name]: event.target.value });
  };
  const handelLogIn = (e) => {
    e.preventDefault();
    if (
      logInInfo.password !== "" &&
      logInInfo.password !== null &&
      logInInfo.email !== null &&
      logInInfo.email !== ""
    ) {
      auth.login(logInInfo);
      auth.onCloseModal();
    }
  };
  // const handelLogIn=(e)=>{
  //   e.preventDefault();
  //   auth.login(email,password);
  // }

  return (
    <>
      {/* <When condition={!auth.loggedIn}> */}
      {/* <When condition={auth.display && !auth.loggedIn}> */}
      <When condition={!auth.registered}>
        <Modal open={auth.open} onClose={auth.onCloseModal} center>
          <div className="singin-div">
            <form>
              <div className="form-group">
                <h2>sign in</h2>
                <label htmlFor="User Name">Email :</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="email"
                  className="form-control"
                  id="User Name"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password :</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success"
                onClick={handelLogIn}
              >
                login
              </button>

              <button
                type="button"
                onClick={auth.renderedForm}
                className="btn btn-primary"
              >
                register
              </button>

              <label className="reg-label">
                register if you don't have an account
              </label>
            </form>
          </div>
        </Modal>
      </When>
      {/* </When> */}
      {/* </When> */}
    </>
  );
}
