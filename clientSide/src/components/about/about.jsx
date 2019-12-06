import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {ReactSVG } from 'react-svg';
import styled from 'styled-components';
import logo from '../../imgs/stars.png';
import back from '../../imgs/back-button.svg'
import Typing from 'react-typing-animation';

const excerp = " is an amateur 5-person studio which seeks to create whumsical games that everyone can enjoy. Our first game, What's Cookin'?, is available in physical form and online."
const orange = "#f26c4f"
const green = "#7CC576"
const purple = "#a389c0"


class About extends Component{

  render() {
    return (
      <Wrapper>
        <StyledH1>About Us</StyledH1>
        <ImgStyle src={logo} alt="Shining Stars Logo"/>
        <StyledP>
          <StyledSpan color={orange}>SHINING STAR GAMES</StyledSpan> is an amateur 5-person studio
            which seeks to create whumsical games that everyone can enjoy.
            Our first game, <StyledSpan color={purple}>{"What's Cookin'?"}</StyledSpan>, is available in physical form and online.
        </StyledP>
        <BackButton to="/">
          <StyledSVG src={back}/>
        </BackButton>
      </Wrapper>
    )
  }
}
export default About;

const Wrapper = styled.div `
  margin: auto;
  display: grid;
  grid-template-rows: auto 67vh 1fr;
  justify-items: center;

  width: 80%;
  height: 100vh;

`

const StyledP = styled.p`
  width: 60%;
  font-size: 2em;

`

const ImgStyle = styled.img`
  height: 100%;
`

const StyledH1 = styled.h1`
  color: #f26c4f;
`

const StyledSpan = styled.span`
  color: ${props=> props.color};
  font-weight: bold;

`

const BackButton = styled(Link)`
  position: absolute;
  top: 30px;
  left: 30px;

`

const StyledSVG = styled(ReactSVG)`
  height: 30px;
  width: 30px;
`
