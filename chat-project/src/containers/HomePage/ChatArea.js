import React from 'react'
// styling
import './ChatArea.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function ChatArea
**/

const ChatArea = (props) => {
  return(
   <div className="chatArea">
     <div className="chatHeader"> Milos Tanaskovic </div>
     <div className="messageSections">

         <div style={{ textAlign: 'left' }}>
             <p className="messageStyle" >Hello User</p>
         </div>

     </div>
     <div className="chatControls">
         <textarea />
         <button>Send</button>
     </div>
   </div>
   )
  }


export default ChatArea