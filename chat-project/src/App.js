import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
// import components
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import PrivateRoute from './components/PrivateRoute';
// import actions
import { isLoggedInUser } from './actions';
import './App.scss';


function App() {
  const dispatch = useDispatch();
  const {authenticated} = useSelector(state => state.auth);
  useEffect(() => {
   if(!authenticated){
     dispatch(isLoggedInUser())
   }
  }, [])
  return (
    <div className="App">
      <Router>
        {/** Only logged in user can see/access home page */}
        <PrivateRoute path="/" exact component={HomePage} />

        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignupPage}/>
      </Router>
    </div>
  );
}

export default App;
