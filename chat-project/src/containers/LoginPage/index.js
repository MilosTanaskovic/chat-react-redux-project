import React, {useState} from 'react';
// import components
import CardUI from '../../components/CardUI'
import Layout from '../../components/Layout'
// import styling
import './style.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function LoginPage
**/

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // onChange
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  //console.log(handleEmail, handlePassword);
  return(
    <Layout>
     <div className="loginContainer">
      <CardUI>
       <form>
        <h3>Login</h3>
        {/** Email */}
        <input 
          type="text" 
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="Email"
        />
        {/** Password */}
        <input 
          type="password" 
          name="password"
          value={password}
          onChange={handlePassword}
          placeholder="Password"
        />
        {/** Login */}
        <div><button>Login</button></div> 
       </form>
      </CardUI>
     </div>
    </Layout>
   )
  }


export default LoginPage