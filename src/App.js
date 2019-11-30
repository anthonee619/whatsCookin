import React, { Component } from 'react';
// import Navbar from './components/navbar'
// import Card from './components/card';
// import Counters from './components/counters';
import Hand from './components/hand';
import styled from 'styled-components';
import './App.css';

class App extends Component{
  state = {}

  render() {
    return (
      <React.Fragment>
      <StyledHand>
        <Hand />
      </StyledHand>
      </React.Fragment>
    )
  }
}

export default App;

// const StyledApp = styled.div `
//   display:grid;
// `

const StyledHand = styled.div`
  background: papayawhip;
  position: fixed;
  bottom:0;
  left:0;
`;

  // state = {
  //   counters : [
  //     { id: 1, value: 4},
  //     { id: 2, value: 0},
  //     { id: 3, value: 0},
  //     { id: 4, value: 0}
  //   ]
  // };
  //
  // handleIncrement = counter => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = {...counter};
  //   counters[index].value++;
  //   this.setState({ counters });
  // }
  //
  // handleDelete = (counterId) => {
  //   const counters = this.state.counters.filter(c => c.id !== counterId);
  //   this.setState({ counters })
  // }
  //
  // handleReset = () => {
  //   const counters = this.state.counters.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({counters})
  // }
  //
  // render() {
  //   return (
  //     <React.Fragment>
  //     <Navbar
  //     totalCounters = {this.state.counters.filter(c => c.value > 0).length}
  //     />
  //     <main className="Container">
  //     <Counters
  //     counters = {this.state.counters}
  //     onReset= {this.handleReset}
  //     onDelete= {this.handleDelete}
  //     onIncrement={this.handleIncrement}/>
  //     </main>
  //     </React.Fragment>
  //   );
  // }
