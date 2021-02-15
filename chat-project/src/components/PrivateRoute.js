import React from 'react'
import { Redirect, Route } from 'react-router-dom';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function PrivateRoute
**/

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  return(
    <Route {...rest} component={(props) => {
      const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

      if(user){
        return <Component {...props} />
      }else{
        return <Redirect to={`/login`} />
      }
    }} />
   )
  }


export default PrivateRoute