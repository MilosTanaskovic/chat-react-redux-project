import React from 'react';
// styling
import './ListOfUsers.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/s
* @function ListOfUsers
**/

const ListOfUsers = (props) => {
  return(
    <div className="listOfUsers">
     <div className="displayName">
      <div className="displayPic">
       <img src="https://pbs.twimg.com/profile_images/1225057323623895041/L0bp83yj_400x400.jpg" alt="" />
      </div>
      <div style={
       {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        margin: '0 10px',

       }
      }>
       <span style={{fontWeight: 500}}>
        Milos Tanaskovic
       </span>
       <span>online</span>
      </div>
     </div>             
    </div>
   )
  }


export default ListOfUsers;