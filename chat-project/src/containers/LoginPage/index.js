import React from 'react';
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
  return(
    <Layout>
     <div className="loginContainer">
      <CardUI>
       <form>
        <input type="text" name="" id=""/>
        <input type="password" name="" id=""/>
       </form>
      </CardUI>
     </div>
    </Layout>
   )
  }


export default LoginPage