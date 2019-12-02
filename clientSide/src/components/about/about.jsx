import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';

class About extends Component{

  render() {
    return (
      <Wrapper>
        <h1>About Shining Stars</h1>
      </Wrapper>
    )
  }
}
export default About;

const Wrapper = styled.div `
  background-color: red;
  margin: auto;
  width: 80%;
  height: 100vh;

  &:h1{
    text-align:center;
  }
`
