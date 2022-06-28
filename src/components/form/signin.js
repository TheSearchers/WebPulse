import { useState, useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../Auth/auth";
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
        <Modal
          className="modal"
          open={auth.open}
          onClose={auth.onCloseModal}
          center
        >
          <div className="singin-div">
            <form>
              <div className="form-group">
                <h2>sign in</h2>

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
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter your Password"
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

              <label className="reg-label">
                New to GetDude ?{" "}
                <span class="span" onClick={auth.renderedForm}>
                  {" "}
                  Register{" "}
                </span>
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
