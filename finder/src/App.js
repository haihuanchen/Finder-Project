import React from 'react';
import './App.css';
import Header from './Header'
import FinderCards from './FinderCards'
import SwipeButton from './SwipeButton'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ChatsContainer from './ChatsContainer';
import ChatScreen from './ChatScreen'

function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header />
          <FinderCards />
          <SwipeButton />
        </Route>
        <Route exact path="/chat">
          <Header backButton="/"/>
          <ChatsContainer />
        </Route>
        <Route path="/chat/:person">
          <Header backButton="/chat"/>
          <ChatScreen />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
