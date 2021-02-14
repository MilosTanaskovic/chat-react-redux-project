import React, {useState, useEffect} from 'react'
// import components
import Layout from '../../components/Layout';
import ChatArea from './ChatArea';
import Users from './Users';

import {useDispatch, useSelector} from 'react-redux';
import { getRealTimeUsers }  from "../../actions";
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

  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.auth)
  const { users } = useSelector(state => state.user);
  let unsubscribe;

  useEffect(() => {
   unsubscribe = dispatch(getRealTimeUsers(uid))
   .then(unsubscribe => {
     return unsubscribe;
   })
   .catch(error => {
     console.log(error);
   })
  }, []);
  console.log(users);
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
    console.log(user);
  }

  return(
     <Layout>
      <section className="container">
        {/** List Of Users */}
        <Users 
          onClick={initChat}
          users={users}
        />      
        {/** Chat Area */}
        <ChatArea
          users={users}
          chatStarted={chatStarted}
          chatUser={chatUser}
        />
    </section>
    </Layout>
   )
  }


export default HomePage