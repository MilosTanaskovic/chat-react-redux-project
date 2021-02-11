import React from 'react'
// import components
import Layout from '../../components/Layout';
import ChatArea from './ChatArea';
import ListOfUsers from './ListOfUsers';
// styling
import './style.css';
/**
* @author Milos Tanaskoic - ReactDancing ⚛️🚀
* @see https://www.linkedin.com/groups/8792312/
* @function HomePage
**/

const HomePage = (props) => {
  return(
     <Layout>
      <section className="container">
        {/** List Of Users */}
        <ListOfUsers/>      
        {/** Chat Area */}
        <ChatArea/>
    </section>
    </Layout>
   )
  }


export default HomePage