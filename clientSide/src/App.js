import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Hand from './components/hand/hand';
import Home from './components/home/home';
import JoinGame from './components/joinGame/joinGame';
import About from './components/about/about';
import Game from './components/game/game';
// import styled from 'styled-components';

class App extends Component{
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path= "/"> <Home /> </Route>
          <Route path="/joinGame"> <JoinGame /> </Route>
          <Route path="/about"> <About /> </Route>
          <Route path="/game"> <Game /></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;

// const StyledHand = styled.div`
//   background: papayawhip;
//   position: fixed;
//   bottom:0;
//   left:0;
// `;
