
import './App.css';
import Header from "./components/header/header"
import Signin from "./components/form/signin"
import Signup from "./components/form/signup"
import LoginProvider from './components/Auth/auth';
import { LoginContext } from './components/Auth/auth';
import { useContext } from 'react';
import ChatSection from './components/ChatSection/ChatSection';
function App() {
  const auth = useContext(LoginContext);
  return (
   <>
   <LoginProvider>
   <Header/>
   {/* <When condition={!auth.loggedIn}> */}
   <Signin />
   <Signup />
   {/* </When> */}
   <ChatSection/>
   </LoginProvider>

   </>
  );
}

export default App;
