import React from 'react';
// styling
import './Users.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/s
* @function ListOfUsers
**/

const ListOfUsers = (props) => {
  const {user, onClick} = props;
  return(
    <div className="listOfUsers">
    {
      user.users.length > 0 ?
      user.users.map((user) => {
        return (
          <div key={user.uid} onClick={() => onClick(user)} className="displayName">
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
              {user.firstName} {user.lastName}
            </span>
            <span className={
              user.isOnline ? `onlineStatus` : `onlineStatus off`
            }></span>
            </div>
          </div>   
        );
      }) : null
    }
               
    </div>
   )
  }


export default ListOfUsers;