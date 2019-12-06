import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const PreGame = ({round, players}) => {
  if(round !== 0) {
    return null;
  }
  return (
    <StyledDiv>
      <h2>You are now in the pregame lobby</h2>
      <h4>
        Current players in the lobby: {players.map(player => player.username + " ")}
      </h4>
      <h4>Waiting on the host to start the game</h4>
      <ReactLoading type={'bars'} color={'black'} height={'1em'}/>
    </StyledDiv>
  )
}
export default PreGame;

const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr;
  justify-items:center;

`
