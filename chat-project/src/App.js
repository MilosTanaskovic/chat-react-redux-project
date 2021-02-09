import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import components
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignupPage}/>
      </Router>
    </div>
  );
}

export default App;
