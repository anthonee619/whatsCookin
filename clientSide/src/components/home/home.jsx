import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../imgs/logo.png';
import styled from 'styled-components';

class Home extends Component {

  render() {
    return (
      <StyledHome>
        <StyledLogo src = { Logo } alt = "What's Cookin'" / >
        <StyledP>A Shining Star Games Production </StyledP>
        <StyledA to="/about">Rules</StyledA>
        <StyledA to="/joinGame" primary="true">Play</StyledA>
      </StyledHome>
    )
  }
}
export default Home

const StyledHome = styled.div `
  display: grid;
  grid-template-areas: "logo logo" "p p" "rules play";
  grid-gap: 40px;
  justify-items: center;
  font-size: 2em;
`;

const StyledLogo = styled.img `
  grid-area: logo;
`;

const StyledP = styled.p`
  grid-area: p;
  color: rebeccapurple;
`

const StyledA = styled(Link)`
  color: ${props => props.primary ? "papayawhip" : "#7cc576" };
  background-color: ${props=> props.primary ? "#a389c0" : "inherit"};
  padding: 20px;
  width: 40%;
  border: 5px solid;
  border-radius: 0.5em;
  text-align: center;
  text-decoration: none;

  &:hover{
    width: 50%;
    color: ${props => props.primary ? "papayawhip" : "#7cc576" };
    background-color: ${props=> props.primary ? "#a389c0" : "inherit"};
    text-decoration: none;
  }
`;
