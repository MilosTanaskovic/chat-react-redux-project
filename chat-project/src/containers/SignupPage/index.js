import React, {useState} from 'react'
import CardUI from '../../components/CardUI'
import Layout from '../../components/Layout'
import { signup } from '../../actions';
import { useDispatch } from 'react-redux';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @like https://www.linkedin.com/groups/8792312/
* @function SignupPage
**/

const SignupPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dispatch
  const dispatch = useDispatch();
  // signup User
  const signupUser = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    }
    dispatch(signup(user));
  }
 
  return(
   <Layout>
    <div className="registerContainer">
      <CardUI>
        <form onSubmit={signupUser}>
          <h3>Sign up</h3>
          {/** First Name */}
          <input 
            type="text" 
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          {/** Last Name */}
          <input 
            type="text" 
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          {/** Email */}
          <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Gmail"
          />
          {/** Password */}
          <input 
            type="password" 
            name="firstName"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          {/** Signup */}
          <div><button>Sign Up</button></div>
        </form>
      </CardUI>
    </div>
   </Layout>
   )
  }


export default SignupPage