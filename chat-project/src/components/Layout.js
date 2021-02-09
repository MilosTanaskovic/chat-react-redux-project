import React from 'react'
// import components
import Header from './Header';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function Layout
**/

const Layout = (props) => {
  return(
    <div>
     <Header />
     {props.children}
    </div>
   )
  }


export default Layout
