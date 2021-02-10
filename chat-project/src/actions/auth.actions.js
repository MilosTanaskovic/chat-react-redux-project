import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

export const signup = (user) =>{
 const auth = firebase.auth();
 const firestore = firebase.firestore();
 return async (dispatch) => {

  const db = firestore;
  auth
  .createUserWithEmailAndPassword(
   user.email,
   user.password
  )
  .then(user => {
   console.log(user);
  })
  .catch(error => {
   console.log(error);
  })
 }
}