import { useState, useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../Auth/auth";
export default function Register() {
  const auth = useContext(LoginContext);
  const [userInfo,setUserInfo]=useState({
    username:"",
    email:"",
    password:"",
    
  })
  const handleChange=(event)=>{
    event.preventDefault();
  setUserInfo({...userInfo,[event.target.name] : event.target.value})
  }
  const handelSubmit=(e)=>{
    e.preventDefault();
    if(userInfo.username!==""&&userInfo.username!==null&&userInfo.password!==""&&userInfo.password!==null&&userInfo.email!==null&&userInfo.email!==""){
      auth.signup(userInfo);
    }
  }
  return (
    <>
    
      <When condition={auth.registered}>
        <div style={{textAlign: "center",marginTop:"70px"}}>
        <form style={{width:"30%",marginLeft:"20px",borderStyle:"outset",borderRadius: "10px",backgroundColor: "#f2f2f2",display: "inline-block"}}>
          <div className="form-group" style={{marginBottom:"20px",fontSize: "20px"}}>
            <h2>Sign up</h2>
            <label htmlFor="User Name"><h5>User Name :</h5></label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              className="form-control"
              id="User Name"
              placeholder="Enter User Name"
              required
            />
          </div>
          <div className="form-group" style={{marginBottom:"20px"}}>
            <label htmlFor="exampleInputEmail1" style={{fontSize: "20px"}}><h5>Email :</h5></label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="insert you email"
              required
            />
          </div>
          <div className="form-group" style={{marginBottom:"20px"}}>
            <label htmlFor="exampleInputPassword1" style={{fontSize: "20px"}}><h5>Password :</h5></label>
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
          
          {/* <label htmlFor="role" style={{fontSize: "20px"}}> Choose a role :</label>

          <select name="role" id="role" onChange={handleChange} style={{marginLeft:"20px"}}>
            <option className="btn btn-outline-primary" value="user">
              user
            </option>
            <option className="btn btn-outline-primary" value="admin">
              admin
            </option>
          </select>
          <br></br> */}
          
          <button type="submit" onClick={handelSubmit} className="btn btn-success" style={{marginTop:"20px"}}>
            Signup
          </button>
          <br/>
          <label style={{fontSize: "20px"}}> registered already? </label><br/>
          <button 
          className="btn btn-primary" 
          style={{marginTop:"20px",marginLeft:"20px"}}
            type="button"
            onClick={auth.renderedForm}
          >
            login
          </button>
        
        </form>
        </div>
      </When>
      
    </>
  );
}