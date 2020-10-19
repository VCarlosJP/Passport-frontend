import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';

import Login from './components/Login'
import Expenses from './components/Expenses'
import Navbar from './components/Navbar'
import Operations from './components/Operations'

import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';





function App() {
  return (

      <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <div className="mainContainer">
          <Navbar/>
          <div  className="wraper">
          <Operations/>
          <Route path="/expenses" component={Expenses}></Route>
          </div>
          
        </div>
      </Switch>
    </Router>
    
   
  );
}

export default App;
