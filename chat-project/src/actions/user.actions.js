import { userConstants } from './constants';
import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export const getRealTimeUsers = (uid) => {
 const firestore = firebase.firestore();

 return async (dispatch) => {
  dispatch({
   type: `${userConstants.GET_REALTIME_USERS}_REQUEST`
  });

  const db = firestore;
  const unsubscribe = db.collection("users")
  // Listen to multiple documents in a commection
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

   return unsubscribe;
 }
}

export const updateMessage = (msgObj) => {
  const firestore = firebase.firestore();

  return async dispatch => {

    const db = firestore;
    db.collection('conversations')
    .add({
      ...msgObj,
      isView: false,
      createdAt: new Date(),
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}