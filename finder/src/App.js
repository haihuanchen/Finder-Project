import React from 'react';
import './App.css';
import Header from './Header'
import FinderCards from './FinderCards'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="app">
    <Header />
    <Router>
      <Switch>
        <Route exact path='/'>
          <h1>The Finder App Main Page</h1>
          <FinderCards />
        </Route>
        <Route path="/chat">
          <h1>The Finder App Chat Page</h1>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
