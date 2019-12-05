import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import io from 'socket.io-client';

let socket;

const JoinGame = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [servers, setServer] = useState([]);

  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('request games');
    socket.on('response games', servers => {
      setServer(servers);
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    }
  });


  return (
    <Wrap>
      <H2>Please Pick a server to join</H2>
      <StyledInput area="name" placeholder="name" onChange={(event)=> setName(event.target.value)}/>
      <P>Server List</P>
      <GameList>
        {servers.map(server => (
          <li key={server.host_socket_id}>
            <GameLinks
              onClick={event => (!name) ? event.preventDefault() : null}
              to={`/game?name=${name}&room=${server.game_name}&isHost=false`}>
              {server.game_name}
            </GameLinks>
          </li>
        ))}
      </GameList>
    <StyledInput area="createGame" placeholder = "Server Name" onChange={(event)=> setRoom(event.target.value)}/>
    <CreateGame
      onClick={event => (!name || !room) ? event.preventDefault() : null}
      to={`/game?name=${name}&room=${room}&isHost=true` }>
      Create New Game
    </CreateGame>
    </Wrap>
  )

}
export default JoinGame;

const Wrap = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-areas: "welcome" "name" "serverL" "server" "createGame" "submit";
  grid-template-rows: auto auto auto 1fr auto auto;
  height: 90vh;
  width: 80vw;
  text-align: center;
  margin: auto;
  padding: 1vh 0;
`

const H2 = styled.h2`
  gird-area: welcome;
`

const P = styled.p`
  grid-area: serverL;
`

const StyledInput = styled.input `
  grid-area: ${props => props.area};
  font-family: "Roboto", sans-serif;
  height: 2em;
  border-radius: 1em;
  text-align: center;
`

const GameLinks = styled(Link)`

`

const CreateGame = styled(Link) `
  grid-area:submit;
  width: inherit;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: black;
  background-color: #7cc576;
  border-radius: 1em;
  padding: 1em;
`

const GameList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-template: repeat(10, 1fr) / repeat(10, 1fr);
  justify-items: center;
  align-items: center;
  grid-gap: 5px;
`
