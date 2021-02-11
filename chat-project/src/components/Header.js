import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../actions';
// import styling
import './Header.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function Header
**/

const Header = (props) => {
  const {authenticated, firstName, lastName} = useSelector(state => state.auth)
  const dispatch = useDispatch();
  // logout
const handleLogout = () => {
  dispatch(logout());
}
  return(
    <header className="header">
     <div style={{display: 'flex'}}>
      <div className="logo">Chat App</div>
      { !authenticated ?
        <ul className="leftMenu">
          <li><NavLink to={'/login'}>Login</NavLink></li>
          <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
        </ul> 
        : null
      }
      
     </div>
     <div style={
      {
       margin: '20px 0px',
       color: '#fff',
       fontWeight: 'bold',
      }
     }>
    {
      authenticated ? `Hi ${firstName} ${lastName}` : ''
    }
     </div>
     <ul className="menu">
     {
      authenticated ? 
      <li><Link onClick={handleLogout} to={'#'}>Logout</Link></li>
      : null
     }
      
     </ul>
    </header>
   )
  }


export default Header