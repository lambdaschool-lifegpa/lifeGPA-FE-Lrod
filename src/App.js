import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import withAuthenticate from './Components/withAuthenticate';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        {/* <ComponentFromAuthenticate /> */}
        <Route exact path='/' component={Landing} />
        <div className='container'>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/dashboard' render={props => <Dashboard {...props} />}  />
        </div>
      </div>
    </Router>
  );
}
// const ComponentFromAuthenticate = withAuthenticate(Dashboard)(Login);

export default App;
