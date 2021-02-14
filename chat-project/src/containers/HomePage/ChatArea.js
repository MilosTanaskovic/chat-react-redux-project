import React from 'react'
// styling
import './ChatArea.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function ChatArea
**/

const ChatArea = (props) => {
  const { users, chatStarted, chatUser} = props;
  return(
   <div className="chatArea">
     <div className="chatHeader"> 
      {
        chatStarted ? chatUser : ''
      }
     </div>
     <div className="messageSections">
      {
        chatStarted ?
         <div style={{ textAlign: 'left' }}>
             <p className="messageStyle" >Hello User</p>
         </div> : null
      }
     </div>
      {
        chatStarted ?
        <div className="chatControls">
         <textarea />
         <button>Send</button>
        </div> : null
      }
   </div>
   )
  }


export default ChatArea