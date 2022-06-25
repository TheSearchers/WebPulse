import { useState,useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../Auth/auth";
export default function Signin() {
//   const [registered, setRegistred] = useState(false);
//   const  renderedForm=()=>{
//     setRegistred(!registered)
//   }
const auth=useContext(LoginContext)
// const [email,setEmail] = useState('');
// const [password,setPassword] = useState('');
const [logInInfo,setLogInInfo]=useState({
  email:"",
  password:"",
  // state:"true",
})
const handleChange=(event)=>{
  event.preventDefault();
  setLogInInfo({...logInInfo,[event.target.name] : event.target.value})
}
const handelLogIn=(e)=>{
  e.preventDefault();
  if(logInInfo.password!==""&&logInInfo.password!==null&&logInInfo.email!==null&&logInInfo.email!==""){
    auth.login(logInInfo);
    setLogInInfo({})
  }
}
// const handelLogIn=(e)=>{
//   e.preventDefault();
//   auth.login(email,password);
// }

  return (
    <>
    {/* <When condition={!auth.loggedIn}> */}
    <When condition={auth.display&&!auth.loggedIn}>
      <When condition={!auth.registered}>
        <div style={{textAlign: "center",marginTop:"70px"}}>
        <form style={{width:"30%",marginLeft:"20px",borderStyle:"outset",borderRadius: "10px",backgroundColor: "#f2f2f2", display: "inline-block"}}>
          <div className="form-group" style={{marginBottom:"20px"}}>
            <h2>sign in</h2>
            <label htmlFor="User Name" style={{fontSize: "20px"}}>Email :</label>
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
          <div className="form-group" style={{marginBottom:"20px"}}>
            <label htmlFor="exampleInputPassword1" style={{fontSize: "20px"}}>Password :</label>
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
          
          <button type="submit" className="btn btn-success" onClick={handelLogIn} style={{marginBottom:"20px"}}>
            login
          </button>
          <br/>
        <label style={{fontSize: "20px"}}> register if you don't have an account </label><br/>
      <button type="button" onClick={auth.renderedForm} className="btn btn-primary" style={{marginTop:"10px"}}>register</button>
        </form>
        </div>
      
      </When>
      </When>
      {/* </When> */}
    </>
  );
}