import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Landing} />
        <div className="container">
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
      </div>
    </Router>
  );
}

export default App;
