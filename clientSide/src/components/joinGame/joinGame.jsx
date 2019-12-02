import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const JoinGame = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');


  return (
    <Wrap className="container">
      <StyledInput area="name" placeholder="name" onChange={(event)=> setName(event.target.value)}/>
      <StyledInput area="server" placeholder = "server" onChange={(event)=> setRoom(event.target.value)}/>
      <StyledLink onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/game?name=${name}&room=${room}`}>
        JoinGame
      </StyledLink>
    </Wrap>
  )
}
export default JoinGame;

const Wrap = styled.div`
  grid-gap: 10px;
  grid-template-areas: "name" "server" "submit";
  grid-template-rows: repeat(3, 50px);
  height: 100vh;
  text-align: center;
`

const StyledInput = styled.input `
  grid-area: ${props => props.area};
  font-family: "Roboto", sans-serif;
`


const StyledLink = styled(Link) `
  grid-area:submit;
  width: inherit;
  height: 100%;
  background-color: pink;
  font-family: "Roboto", sans-serif;
`
