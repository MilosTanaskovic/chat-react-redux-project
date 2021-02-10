import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider} from 'react-redux';
import store from './store';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNj2T1nbUirDzDmDVnwYui1Oj8z3zA5tw",
    authDomain: "chat-project-ece89.firebaseapp.com",
    projectId: "chat-project-ece89",
    storageBucket: "chat-project-ece89.appspot.com",
    messagingSenderId: "232515004261",
    appId: "1:232515004261:web:3789f4377ac9174e30238c",
    measurementId: "G-TQTJWF2Y67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // setup redux
  window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>   
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
