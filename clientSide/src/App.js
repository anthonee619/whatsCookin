import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Hand from './components/hand/hand';
import Home from './components/home/home';
import JoinGame from './components/joinGame/joinGame';
import About from './components/about/about';
import Game from './components/game/game';

class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path= "/" component={Home}/>
          <Route path="/joinGame" component= {JoinGame}/>
          <Route path="/about" component= {About }/>
          <Route path="/game" component= {Game}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
