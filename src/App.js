import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from './logo.svg';

import Login from './components/Login'
import Expenses from './components/Expenses'
import Navbar from './components/Navbar'

import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.scss';





function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/expenses" component={Expenses}></Route>
        <Route path="/navbar" component={Navbar}></Route>
      </Switch>
    </Router>
  );
}

export default App;
