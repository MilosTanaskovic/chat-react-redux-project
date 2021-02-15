import React, {useState, useEffect} from 'react'
// import components
import Layout from '../../components/Layout';
import ChatArea from './ChatArea';
import Users from './Users';

import {useDispatch, useSelector} from 'react-redux';
import { getRealTimeUsers, updateMessage }  from "../../actions";
// styling
import './style.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function HomePage
**/

const HomePage = () => {

  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState("");
  const [message, setMessage] = useState('');
  const [userUID, setUserUID] = useState(null);

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.user);
  let unsubscribe;

  useEffect(() => {
   unsubscribe = dispatch(getRealTimeUsers(auth.uid))
   .then(unsubscribe => {
     return unsubscribe;
   })
   .catch(error => {
     console.log(error);
   })
  }, []);
  // component will unmount
  useEffect(() => {
    return () => {
      // cleanup process
      unsubscribe.then(f => f())
      .catch(error => console.log(error));
    }
  }, [])
  // initial Chat
  const initChat = (user) => {
    setChatStarted(true);
    setChatUser(`${user.firstName} ${user.lastName}`);
    setUserUID(user.uid);
    console.log(user);
  }
  // submit Message
  const submitMessage = (e) => {

    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUID,
      message
    }

    if(message !== ""){
      dispatch(updateMessage(msgObj));
    }
    //console.log(msgObj);
  }

  return(
     <Layout>
      <section className="container">
        {/** List Of Users */}
        <Users 
          onClick={initChat}
          user={user}
        />      
        {/** Chat Area */}
        <ChatArea
          user={user}
          chatStarted={chatStarted}
          chatUser={chatUser}
          message={message}
          setMessage={setMessage}
          submitMessage={submitMessage}
        />
    </section>
    </Layout>
   )
  }


export default HomePage