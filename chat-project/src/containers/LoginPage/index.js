import React, {useState, useEffect} from 'react';
import { isLoggedInUser, signin } from '../../actions';
// import components
import CardUI from '../../components/CardUI'
import Layout from '../../components/Layout'

import { useDispatch, useSelector } from 'react-redux';
// import styling
import './style.css';
import { Redirect } from 'react-router-dom';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function LoginPage
**/

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {authenticated} = useSelector(state => state.auth);

  useEffect(() => {
    
   if(!authenticated){
     dispatch(isLoggedInUser());
   }
  }, [])
  // onChange
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }
  //user Login
  const userLogin = (e) => {
    e.preventDefault();

    if(email == ""){
      alert("Email is required");
      return;
    }
    if(password == ""){
      alert("Password is required");
      return;
    }
    
    dispatch(signin({
      email,
      password,
    }));
  }
  // auth
  if(authenticated){
    return <Redirect to={`/`}/>
  }
  //console.log(handleEmail, handlePassword);
  return(
    <Layout>
     <div className="loginContainer">
      <CardUI>
       <form onSubmit={userLogin}>
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