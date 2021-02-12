import React, {useEffect} from 'react'
// import components
import Layout from '../../components/Layout';
import ChatArea from './ChatArea';
import ListOfUsers from './ListOfUsers';

import {useDispatch, useSelector} from 'react-redux';
import { getRealTimeUsers }  from "../../actions";
// styling
import './style.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function HomePage
**/

const HomePage = (props) => {

  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.auth)
  const { users } = useSelector(state => state.user);

  useEffect(() => {
   dispatch(getRealTimeUsers(uid))
  }, []);
  console.log(users);
  return(
     <Layout>
      <section className="container">
        {/** List Of Users */}
        <ListOfUsers 
          users={users}
        />      
        {/** Chat Area */}
        <ChatArea/>
    </section>
    </Layout>
   )
  }


export default HomePage