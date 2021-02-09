import React from 'react'
import { NavLink, Link } from 'react-router-dom';
// import styling
import './Header.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
     <div style={{display: 'flex'}}>
      <div className="logo">Chat App</div>
      <ul className="leftMenu">
       <li><NavLink to={'/login'}>Login</NavLink></li>
       <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
      </ul>
     </div>
     <div style={
      {
       margin: '20px 0px',
       color: '#fff',
       fontWeight: 'bold',
      }
     }>
     Hi Milos
     </div>
     <ul className="menu">
      <li><Link to={'#'}>Logout</Link></li>
     </ul>
    </header>
   )
  }


export default Header