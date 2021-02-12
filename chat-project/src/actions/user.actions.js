import { userConstants } from './constants';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export const getRealTimeUsers = (uid) => {
 const auth = firebase.auth();
 const firestore = firebase.firestore();

 return async (dispatch) => {
  dispatch({
   type: `${userConstants.GET_REALTIME_USERS}_REQUEST`
  });

  const db = firestore;
  // Listen to multiple documents in a commection
  db.collection("users")
  //.where("uid", "!=", uid)
   .onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        if(doc.data().uid != uid){
          users.push(doc.data());
        }
      });
      //console.log(users);

      dispatch({
       type: `${userConstants.GET_REALTIME_USERS}_SUCCESS`,
       payload: {
        users
       }
      })
   });
   

 }
}